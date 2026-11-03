import { useState } from 'react'
import { LocalContext } from './localizacao'

export function LocalProvider({ children }) {
  const [local, setLocal] = useState(null)

  return (
    <LocalContext.Provider value={{ local, setLocal }}>
      {children}
    </LocalContext.Provider>
  )
}
