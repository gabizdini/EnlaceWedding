const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search'

/**
 * Converte o nome de uma cidade em coordenadas usando o Nominatim (OpenStreetMap).
 * Serviço público e gratuito, sem necessidade de chave de API.
 *
 * @param {string} texto nome digitado pelo usuário (ex.: "Machado, MG")
 * @param {{ signal?: AbortSignal }} opções sinal para cancelar a requisição
 * @returns {Promise<{ nome: string, lat: number, lng: number } | null>}
 *          o local encontrado ou `null` quando nada é retornado
 */
export async function geocodificarCidade(texto, { signal } = {}) {
  const params = new URLSearchParams({
    format: 'jsonv2',
    limit: '1',
    countrycodes: 'br',
    q: texto,
  })

  const resposta = await fetch(`${NOMINATIM_URL}?${params}`, {
    signal,
    headers: { 'Accept-Language': 'pt-BR' },
  })

  if (!resposta.ok) {
    throw new Error(`Falha na busca de cidades (${resposta.status})`)
  }

  const resultados = await resposta.json()

  if (!Array.isArray(resultados) || resultados.length === 0) {
    return null
  }

  const primeiro = resultados[0]

  return {
    nome: String(primeiro.display_name).split(',')[0].trim(),
    lat: Number(primeiro.lat),
    lng: Number(primeiro.lon),
  }
}
