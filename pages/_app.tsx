import type {AppProps} from 'next/app'
import "../src/styles/index.scss"
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query';
import {RecoilRoot} from 'recoil'

function MyApp({Component, pageProps}: AppProps) {

  const queryClient = new QueryClient()

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default MyApp
