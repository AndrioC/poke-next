import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import { GlobalStyle } from '../src/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GlobalStyle />
    </Layout>
  )
}
export default MyApp
