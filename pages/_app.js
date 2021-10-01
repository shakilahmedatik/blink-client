import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'
import '../public/css/global.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from '../context'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/images/favicon.ico' type='image/x-icon'></link>
        <title>Blink | Online Learning Platform</title>
      </Head>
      <Provider>
        <ToastContainer position='bottom-right' autoClose={2000} />

        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
