import type {AppProps} from 'next/app'
import "../src/styles/index.scss"
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'

function MyApp({Component, pageProps}: AppProps) {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
