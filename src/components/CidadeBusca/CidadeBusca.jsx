import { useId, useMemo, useRef, useState } from 'react'
import { geocodificarCidade } from '../../services/geocodificar'
import municipios from '../../data/municipios.json'
import './CidadeBusca.css'

const MAXIMO_SUGESTOES = 8
const COMPRIMENTO_MINIMO = 2
const ERRO_NAO_ENCONTRADA = 'Cidade não encontrada — escolha uma opção da lista.'

/**
 * Normaliza um texto para comparação: remove acentos, símbolos e espaços extras,
 * deixando tudo em minúsculas. Assim "São Paulo!" vira "sao paulo".
 */
function chave(texto) {
  return String(texto)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Pré-calcula as chaves de todas as cidades uma única vez (5.571 entradas),
 * evitando renormalizar a lista inteira a cada tecla digitada.
 */
const CIDADES = municipios.map((m) => ({
  nome: m.nome,
  uf: m.uf,
  chaveNome: chave(m.nome),
  chave: chave(`${m.nome} ${m.uf}`),
}))

/**
 * Resolve o texto digitado para uma cidade conhecida.
 * - "Machado, MG" / "machado mg" → cidade exata (nome + UF)
 * - "machado" → aceito somente se o nome existir em uma única UF
 * - nomes repetidos ("Bom Jesus") exigem escolher a UF na lista
 * @returns {typeof CIDADES[number] | null}
 */
function encontrarMunicipio(texto) {
  const k = chave(texto)
  if (k.length < COMPRIMENTO_MINIMO) return null

  let primeiroPorNome = null
  let qtdPorNome = 0

  for (const cidade of CIDADES) {
    if (cidade.chave === k) return cidade
    if (cidade.chaveNome === k) {
      qtdPorNome += 1
      if (!primeiroPorNome) primeiroPorNome = cidade
    }
  }

  return qtdPorNome === 1 ? primeiroPorNome : null
}

/**
 * Lista até 8 sugestões para o texto digitado, priorizando nomes que
 * começam com o texto e ignorando acentos/caixa.
 */
function sugerirCidades(texto) {
  const k = chave(texto)
  if (k.length < COMPRIMENTO_MINIMO) return []

  const comeco = []
  const noMeio = []

  for (const cidade of CIDADES) {
    if (cidade.chave.startsWith(k) || cidade.chaveNome.startsWith(k)) {
      comeco.push(cidade)
    } else if (cidade.chave.includes(k) || cidade.chaveNome.includes(k)) {
      noMeio.push(cidade)
    }
  }

  return [...comeco, ...noMeio].slice(0, MAXIMO_SUGESTOES)
}

/**
 * Campo de busca de cidade com sugestões (dropdown) reutilizável.
 *
 * - Só permite pesquisar quando o texto corresponde a uma cidade conhecida;
 *   caso contrário o botão fica desabilitado e o motivo é exibido.
 * - Ao enviar, geocodifica "Cidade, UF" (Nominatim) e entrega o local pronto
 *   via `onBuscar`, cabendo a quem usa navegar/atualizar o mapa.
 *
 * @param {object} props
 * @param {string} [props.valorInicial] texto pré-preenchido (ex.: "Machado, MG")
 * @param {string} [props.botaoTexto] rótulo do botão de envio
 * @param {(local: { nome: string, lat: number, lng: number }) => void} props.onBuscar
 * @param {string} [props.className] classes extras no formulário
 */
function CidadeBusca({ valorInicial = '', botaoTexto = 'Buscar', onBuscar, className = '' }) {
  const [texto, setTexto] = useState(valorInicial)
  const [aberto, setAberto] = useState(false)
  const [ativo, setAtivo] = useState(-1)
  const [erro, setErro] = useState('')
  const [buscando, setBuscando] = useState(false)
  const raiz = useRef(null)
  const idBase = useId().replace(/:/g, '')
  const listaId = `${idBase}-lista`

  const digitando = chave(texto).length >= COMPRIMENTO_MINIMO
  const mostrarDropdown = aberto && digitando
  const sugestoes = useMemo(
    () => (mostrarDropdown ? sugerirCidades(texto) : []),
    [mostrarDropdown, texto],
  )
  const cidadeValida = encontrarMunicipio(texto)

  function selecionar(cidade) {
    setTexto(`${cidade.nome}, ${cidade.uf}`)
    setAberto(false)
    setAtivo(-1)
    setErro('')
  }

  function aoDigitar(evento) {
    setTexto(evento.target.value)
    setAberto(true)
    setAtivo(-1)
    if (erro) setErro('')
  }

  function aoTeclar(evento) {
    if (evento.key === 'ArrowDown') {
      evento.preventDefault()
      if (!mostrarDropdown) {
        setAberto(true)
        return
      }
      if (sugestoes.length) setAtivo((atual) => (atual + 1) % sugestoes.length)
    } else if (evento.key === 'ArrowUp') {
      evento.preventDefault()
      if (sugestoes.length) {
        setAtivo((atual) => (atual <= 0 ? sugestoes.length - 1 : atual - 1))
      }
    } else if (evento.key === 'Enter') {
      // Enter escolhe a sugestão destacada; sem destaque, segue o envio normal
      if (mostrarDropdown && ativo >= 0 && sugestoes[ativo]) {
        evento.preventDefault()
        selecionar(sugestoes[ativo])
      }
    } else if (evento.key === 'Escape') {
      setAberto(false)
      setAtivo(-1)
    }
  }

  function aoSair(evento) {
    if (evento.relatedTarget && raiz.current?.contains(evento.relatedTarget)) return
    setAberto(false)
    setAtivo(-1)

    if (digitando && !encontrarMunicipio(texto)) setErro(ERRO_NAO_ENCONTRADA)
  }

  async function enviar(evento) {
    evento.preventDefault()

    const destino = encontrarMunicipio(texto)

    if (!destino) {
      setErro(digitando ? ERRO_NAO_ENCONTRADA : 'Digite o nome de uma cidade.')
      if (digitando) setAberto(true)
      return
    }

    setErro('')
    setAberto(false)
    setAtivo(-1)
    setBuscando(true)

    const controle = new AbortController()
    const tempoEsgotado = setTimeout(() => controle.abort(), 8000)

    try {
      const encontrada = await geocodificarCidade(`${destino.nome}, ${destino.uf}`, {
        signal: controle.signal,
      })

      if (!encontrada) {
        setErro('Cidade não encontrada. Confira o nome e tente novamente.')
        return
      }

      onBuscar?.(encontrada)
    } catch (falha) {
      setErro(
        falha?.name === 'AbortError'
          ? 'A busca demorou muito. Tente novamente.'
          : 'Não foi possível buscar agora. Verifique sua conexão e tente novamente.',
      )
    } finally {
      clearTimeout(tempoEsgotado)
      setBuscando(false)
    }
  }

  return (
    <>
      <form
        className={`search-form busca-cidade ${className}`.trim()}
        onSubmit={enviar}
        ref={raiz}
      >
        <div className="busca-cidade-campo">
          <input
            id={idBase}
            type="text"
            role="combobox"
            autoComplete="off"
            aria-label="Cidade"
            aria-expanded={mostrarDropdown}
            aria-controls={listaId}
            aria-autocomplete="list"
            aria-activedescendant={
              mostrarDropdown && ativo >= 0 ? `${listaId}-${ativo}` : undefined
            }
            placeholder="Digite sua cidade"
            value={texto}
            onChange={aoDigitar}
            onKeyDown={aoTeclar}
            onFocus={() => setAberto(true)}
            onBlur={aoSair}
          />
          {mostrarDropdown && (
            <ul className="busca-cidade-dropdown" id={listaId} role="listbox" aria-label="Sugestões de cidades">
              {sugestoes.map((cidade, indice) => (
                <li
                  key={cidade.chave}
                  id={`${listaId}-${indice}`}
                  role="option"
                  aria-selected={indice === ativo}
                  className={`busca-cidade-opcao ${indice === ativo ? 'ativa' : ''}`}
                  onMouseDown={(evento) => {
                    // impede o blur do input para o clique chegar na opção
                    evento.preventDefault()
                    selecionar(cidade)
                  }}
                  onMouseEnter={() => setAtivo(indice)}
                >
                  <span className="busca-cidade-nome">{cidade.nome}</span>
                  <span className="busca-cidade-uf">{cidade.uf}</span>
                </li>
              ))}
              {sugestoes.length === 0 && (
                <li className="busca-cidade-vazio" role="presentation">
                  Nenhuma cidade encontrada
                </li>
              )}
            </ul>
          )}
        </div>
        <button
          type="submit"
          disabled={!cidadeValida || buscando}
          title={cidadeValida ? undefined : 'Escolha uma cidade da lista para pesquisar'}
        >
          {buscando ? 'Buscando...' : botaoTexto}
        </button>
      </form>
      {erro && <p className="search-error busca-cidade-erro" role="alert">{erro}</p>}
    </>
  )
}

export default CidadeBusca
