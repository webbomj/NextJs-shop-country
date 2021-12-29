import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Mainlayout from '../components/Mainlayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Mainlayout>
    <Component {...pageProps} />
  </Mainlayout>
  )
}

export default MyApp
