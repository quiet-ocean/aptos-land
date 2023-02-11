import { createContext, useState } from 'react'

interface AppContextProps {
  loading: boolean
  tokens: any[]
  markets: any[]
  setLoading: (state: boolean) => void
  setTokens: () => void
  setMarkets: () => void
}
const initialContext: AppContextProps = {
  loading: false,
  markets: [
    {
      address: '0x0063E1a32106d9D167C4Bd716252A3e0f256538f',
      name: 'souffl3',
    },
    {
      address: '0x2c7bccf7b31baf770fdbcc768d9e9cb3d87805e255355df5db32ac9a669010a2',
      name: 'topaz',
    },
    {
      address: '0xd1fd99c1944b84d1670a2536417e997864ad12303d19eac725891691b04d614e',
      name: 'bluemove',
    },
  ],
  setLoading: () => {},
  setMarkets: () => {},
  setTokens: () => {},
  tokens: [],
}
const AppContext = createContext(initialContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false)
  const [markets, setMarkets] = useState([] as any[])
  const [tokens, setTokens] = useState([] as any[])

  return (
    <AppContext.Provider
      value={{
        loading,
        markets,
        setLoading,
        setMarkets,
        setTokens,
        tokens,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
