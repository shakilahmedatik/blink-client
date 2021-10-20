import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'
import '../public/css/global.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from '../context'
import Head from 'next/head'
/** 
<script
  src='//code.tidio.co/cgvho5ssjveoxyjuwvn1pylwl59zejxj.js'
  async
></script>
*/
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/images/favicon.ico' type='image/x-icon'></link>

        <title>Blink | Online Learning Platform</title>
      </Head>

      <Provider>
        <ToastContainer position='top-center' autoClose={2000} />

        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
