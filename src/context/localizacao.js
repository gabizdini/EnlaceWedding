import { createContext, useContext } from 'react'

/**
 * Local padrão do mapa: Machado-MG.
 * É usado quando não há nenhuma busca ativa — inclusive após F5/recarregamento,
 * já que o estado do provider vive apenas em memória e é zerado no reload.
 */
export const LOCAL_PADRAO = {
  nome: 'Machado, MG',
  lat: -21.678,
  lng: -45.921,
}

export const LocalContext = createContext(null)

export function useLocal() {
  const contexto = useContext(LocalContext)

  if (!contexto) {
    throw new Error('useLocal precisa ser usado dentro de um <LocalProvider>.')
  }

  return contexto
}
