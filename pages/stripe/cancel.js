import { CloudSyncOutlined } from '@ant-design/icons'
import UserRoute from '../../components/Routes/UserRoute'
import Link from 'next/link'

const StripeCancel = () => {
  return (
    <UserRoute showSidebar={false}>
      <div className='flex flex-col h-screen justify-center items-center'>
        <div className=' flex justify-center items-center'>
          <div className='text-red-500 text-4xl'>
            <CloudSyncOutlined />
          </div>
          <p className='text-lg font-body mt-7 px-2'>
            Payment failed. Try again.
          </p>
        </div>
        <Link href='/'>
          <a className='px-3 py-2 bg-gray-600 text-gray-200 hover:text-gray-500 rounded-lg shadow-lg'>
            Home
          </a>
        </Link>
      </div>
    </UserRoute>
  )
}

export default StripeCancel
