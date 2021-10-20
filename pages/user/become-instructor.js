import { useContext, useState } from 'react'
import { Context } from '../../context'
import { Button } from 'antd'
import axios from 'axios'
import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined,
} from '@ant-design/icons'
import { toast } from 'react-toastify'
import UserRoute from '../../components/Routes/UserRoute'

const BecomeInstructor = () => {
  // state
  const [loading, setLoading] = useState(false)
  const {
    state: { user },
  } = useContext(Context)

  const becomeInstructor = () => {
    // console.log("become instructor");
    setLoading(true)
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/make-instructor`)
      .then(res => {
        console.log(res)
        window.location.href = res.data
      })
      .catch(err => {
        console.log(err.response.status)
        toast.error('Stripe onboarding failed. Try again.')
        setLoading(false)
      })
  }

  return (
    <UserRoute>
      <div className='lg:w-1/2 mx-auto my-16 py-12 text-center bg-gray-50 rounded-xl shadow-xl'>
        <h1 className='text-2xl font-semibold uppercase tracking-tight text-gray-700 md:text-4xl sm:leading-none'>
          Become Instructor
        </h1>

        <div>
          <div className='pt-4'>
            <div className='flex justify-center'>
              <img src='/images/logo.png' className='w-20 h-20' alt='' />
            </div>
            <br />
            <h2 className='text-2xl text-gray-600'>
              Setup payout to publish courses on Blink
            </h2>
            <p className='text-yellow-500 text-lg'>
              Blink partners with stripe to transfer earnings to your bank
              account
            </p>

            <button
              className=' py-2 mt-6 px-5 text-center rounded text-white transition duration-200 shadow-md bg-blue-600 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none'
              onClick={becomeInstructor}
              disabled={
                (user && user.role && user.role.includes('Instructor')) ||
                loading
              }
            >
              {loading ? (
                <>
                  <LoadingOutlined className='text-3xl' /> Processing...
                </>
              ) : (
                <>
                  <SettingOutlined className='text-3xl' /> Setup Payout
                </>
              )}
            </button>

            <p className='text-gray-500 text-md pt-5'>
              You will be redirected to stripe to complete onboarding process.
            </p>
          </div>
        </div>
      </div>
    </UserRoute>
  )
}

export default BecomeInstructor
