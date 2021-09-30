import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'
import '../public/css/global.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TopNav from '../components/Navbar/TopNav'
import { Provider } from '../context'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ToastContainer position='bottom-right' autoClose={2000} />
      <TopNav />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
