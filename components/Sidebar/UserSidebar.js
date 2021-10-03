import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { Context } from '../../context'
import {
  AppstoreOutlined,
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  UserOutlined,
  TeamOutlined,
  CarryOutOutlined,
} from '@ant-design/icons'

const UserSidebar = () => {
  const [current, setCurrent] = useState('')
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])
  const { state, dispatch } = useContext(Context)
  const { user } = state
  const [isActive, setActive] = useState('false')

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
        style={{ backgroundImage: `url('/images/fall.svg')` }}
        className={`z-10 md:fixed overflow-x-hidden text-blue-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <Link href='/'>
          <a className='text-white flex justify-center items-center space-x-2'>
            <img
              className='object-cover w-10 h-10 rounded-full'
              alt='User avatar'
              src='/images/logo.svg'
            />
            <span className='text-2xl font-extrabold'>BLINK</span>
          </a>
        </Link>
        <nav>
          <Link href='/user'>
            <a
              className={`block py-2.5 px-4 rounded transition duration-200 ${
                current === '/user' && 'bg-blue-500'
              } hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-700 text-white hover:text-white`}
            >
              <UserOutlined /> Dashboard
            </a>
          </Link>
          {user && user.role && !user.role.includes('Instructor') && (
            <Link href='/user/become-instructor'>
              <a
                className={`block py-2.5 px-4 rounded transition duration-200 ${
                  current === '/user/become-instructor' && 'bg-blue-500'
                } hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-700 text-white hover:text-white`}
              >
                <TeamOutlined /> Become Instructor
              </a>
            </Link>
          )}
          <Link href='/'>
            <a className='block py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 text-white hover:text-white'>
              About
            </a>
          </Link>
          <Link href='/'>
            <a className='block py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 text-white hover:text-white'>
              Features
            </a>
          </Link>
          <Link href='/'>
            <a className='block py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 text-white hover:text-white'>
              Pricing
            </a>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default UserSidebar
