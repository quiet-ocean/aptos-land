import '../styles/globals.css'
import { ApolloProvider } from '@apollo/react-hooks'
import * as ApolloClient from 'apollo-boost'
import type { AppProps } from 'next/app'

import { AppProvider } from '../store/AppProvder'
import axios from 'axios'
import { setupAxios } from '../utils/axios'
interface ICache {
  id?: string
  refetchQueries: any
  getObservableQueries: any
  setLink: any
}

setupAxios(axios)

const client = new ApolloClient.default({
  uri: 'https://cloud.hasura.io/public/graphiql?endpoint=https://indexer.mainnet.aptoslabs.com/v1/graphql',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ApolloProvider>
  )
}

export default MyApp
