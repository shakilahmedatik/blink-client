import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { SyncOutlined } from '@ant-design/icons'
import { Context } from '../context'
import { useRouter } from 'next/router'
import TopNav from '../components/Navbar/TopNav'

const ForgotPassword = () => {
  // state
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // context
  const {
    state: { user },
  } = useContext(Context)
  // router
  const router = useRouter()

  // redirect if user is logged in
  useEffect(() => {
    if (user !== null) router.push('/')
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/forgot-password`,
        {
          email,
        }
      )
      setSuccess(true)
      toast.success('Check your email for the secret code')
      setLoading(false)
    } catch (err) {
      setLoading(false)
      toast.error(err.response.data)
    }
  }

  const handleResetPassword = async e => {
    e.preventDefault()
    // console.log(email, code, newPassword);
    // return;
    try {
      setLoading(true)
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/reset-password`,
        {
          email,
          code,
          newPassword,
        }
      )
      setEmail('')
      setCode('')
      setNewPassword('')
      toast('Password Changed Successfully, Please Login.')
      setLoading(false)
      router.push('/login')
    } catch (err) {
      setLoading(false)
      toast(err.response.data)
    }
  }

  return (
    <>
      <TopNav />
      <section style={{ backgroundImage: `url('/images/live.svg')` }}>
        <div className='flex justify-center py-16'>
          <div className='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
            <h1 className='text-3xl font-mono text-gray-500 text-center'>
              RESET PASSWORD
            </h1>
            <form
              onSubmit={success ? handleResetPassword : handleSubmit}
              className='space-y-6 ng-untouched ng-pristine ng-valid'
            >
              <div className='space-y-1 text-sm'>
                <label htmlFor='email' className='block text-gray-600'>
                  Email
                </label>
                <input
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
                />
              </div>
              {success && (
                <>
                  <div className='space-y-1 text-sm'>
                    <label htmlFor='code' className='block text-gray-600'>
                      Code
                    </label>
                    <input
                      className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
                      value={code}
                      onChange={e => setCode(e.target.value)}
                      name='code'
                      id='code'
                      type='text'
                      placeholder='Enter secret code'
                      required
                    />
                  </div>

                  <div className='space-y-1 text-sm'>
                    <label htmlFor='password' className='block text-gray-600'>
                      Password
                    </label>
                    <input
                      type='password'
                      value={newPassword}
                      onChange={e => setNewPassword(e.target.value)}
                      name='password'
                      id='password'
                      placeholder='Password'
                      className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
                    />
                  </div>
                </>
              )}

              <button
                type='submit'
                className='block w-full p-3 text-center rounded-sm text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400'
                disabled={loading || !email}
              >
                {loading ? <SyncOutlined spin /> : 'SUBMIT'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ForgotPassword
