import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { Context } from '../../context'
import {
  LogoutOutlined,
  UserOutlined,
  CarryOutOutlined,
  MessageOutlined,
  MoneyCollectOutlined,
} from '@ant-design/icons'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const InstructorSidebar = () => {
  const [current, setCurrent] = useState('')
  const [isActive, setActive] = useState('false')

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])

  const { state, dispatch } = useContext(Context)
  const { user } = state
  const router = useRouter()

  // Logout Handler
  const logout = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/logout`)
    dispatch({ type: 'LOGOUT' })
    window.localStorage.removeItem('user')
    router.push('/login')
    toast.warning(data.message)
  }

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      <div className='bg-gray-800 text-gray-100 flex justify-between md:hidden'>
        <Link href='/'>
          <a className='block p-4 text-white font-bold'>Blink App</a>
        </Link>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'
        >
          <svg
            className='h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
      <div
        className={`z-10 md:fixed overflow-x-hidden bg-blue-600 text-blue-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <Link href='/'>
          <a className='text-white flex justify-center items-center space-x-2'>
            <img
              className='object-cover w-10 h-10 rounded-lg bg-white'
              alt='User avatar'
              src='/images/logo.png'
            />
            <span className='text-2xl font-extrabold'>BLINK</span>
          </a>
        </Link>
        <nav>
          <Link href='/instructor'>
            <a
              className={`block py-2.5 px-4 rounded transition duration-200 ${
                current === '/instructor' && 'bg-blue-500'
              } hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-700 text-white hover:text-white`}
            >
              <UserOutlined /> Dashboard
            </a>
          </Link>
          <Link href='/instructor/course/create'>
            <a
              className={`block py-2.5 px-4 rounded transition duration-200 ${
                current === '/instructor/course/create' && 'bg-blue-500'
              } hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-700 text-white hover:text-white`}
            >
              <CarryOutOutlined /> Create Course
            </a>
          </Link>
          <Link href='/instructor/revenue'>
            <a
              className={`block py-2.5 px-4 rounded transition duration-200 ${
                current === '/instructor/revenue' && 'bg-blue-500'
              } hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-700 text-white hover:text-white`}
            >
              <MoneyCollectOutlined /> Revenue
            </a>
          </Link>

          <hr className='mt-5 text-gray-400' />
          <Link href='/contact'>
            <a className='block py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-700 text-white hover:text-white'>
              <MessageOutlined /> Contact Us
            </a>
          </Link>

          <div
            onClick={() => logout()}
            className='block py-2.5 cursor-pointer px-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-700 text-white hover:text-white'
          >
            <LogoutOutlined /> <span className='pt-5'>Logout</span>
          </div>
        </nav>
      </div>
    </>
  )
}

export default InstructorSidebar
