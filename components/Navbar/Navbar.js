import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { Context } from '../../context'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [current, setCurrent] = useState('')
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])

  // Context
  const { state, dispatch } = useContext(Context)
  const { user } = state
  const router = useRouter()

  console.log(user)

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])

  // Logout Handler
  const logout = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/logout`)
    dispatch({ type: 'LOGOUT' })
    window.localStorage.removeItem('user')
    router.push('/login')
    toast.warning(data.message)
  }

  return (
    <div className='px-4 sticky top-0 z-50 bg-white shadow-xl mx-auto py-5 sm:max-w-xl lg:py-0 md:max-w-full lg:max-w-full md:px-24 lg:px-14'>
      <div className='relative flex items-center justify-between'>
        <Link href='/'>
          <a
            aria-label='Company'
            title='Company'
            className='inline-flex items-center'
          >
            <svg
              className='w-8 text-blue-600'
              viewBox='0 0 24 24'
              strokeLinejoin='round'
              strokeWidth='2'
              strokeLinecap='round'
              strokeMiterlimit='10'
              stroke='currentColor'
              fill='none'
            >
              <rect x='3' y='1' width='7' height='12' />
              <rect x='3' y='17' width='7' height='6' />
              <rect x='14' y='1' width='7' height='6' />
              <rect x='14' y='11' width='7' height='12' />
            </svg>
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
              Blink
            </span>
          </a>
        </Link>

        <ul className='lg:flex my-2 items-center hidden space-x-8 '>
          <li>
            <Link href='/'>
              <a
                aria-label='Homepage'
                title='Homepage'
                className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600 ${
                  current === '/' && 'text-blue-600'
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/courses'>
              <a
                aria-label='Browse Courses'
                title='Browse Courses'
                className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600 ${
                  current === '/courses' && 'text-blue-600'
                }`}
              >
                Courses
              </a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a
                aria-label='Contact us'
                title='Contact us'
                className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600 ${
                  current === '/contact' && 'text-blue-600'
                }`}
              >
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a
                aria-label='About us'
                title='About us'
                className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600 ${
                  current === '/about' && 'text-blue-600'
                }`}
              >
                About us
              </a>
            </Link>
          </li>
          {user !== null && (
            <>
              {user.role && user.role.includes('Instructor') ? (
                <li>
                  <Link href='/instructor'>
                    <a
                      className='inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide bg-white transition duration-200 rounded shadow-md text-blue-700 hover:bg-blue-600 hover:text-white focus:shadow-outline focus:outline-none'
                      aria-label='Instructor dashboard'
                      title='Instructor dashboard'
                    >
                      Dashboard
                    </a>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href='/user'>
                    <a
                      className='inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide bg-white transition duration-200 rounded shadow-md text-blue-700 hover:bg-blue-600 hover:text-white focus:shadow-outline focus:outline-none'
                      aria-label='User dashboard'
                      title='User dashboard'
                    >
                      Dashboard
                    </a>
                  </Link>
                </li>
              )}
            </>
          )}

          {user !== null && (
            <li
              className='inline-flex items-center cursor-pointer justify-center h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-white hover:text-blue-700 focus:shadow-outline focus:outline-none'
              aria-label='Logout'
              title='Logout'
              onClick={() => logout()}
            >
              Logout
            </li>
          )}

          {user === null && (
            <>
              <li>
                <Link href='/login'>
                  <a
                    className='inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide bg-white transition duration-200 rounded shadow-md text-blue-700 hover:bg-blue-600 hover:text-white focus:shadow-outline focus:outline-none'
                    aria-label='Sign in'
                    title='Sign in'
                  >
                    Login
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/register'>
                  <a
                    className='inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-white hover:text-blue-700 focus:shadow-outline focus:outline-none'
                    aria-label='Sign up'
                    title='Sign up'
                  >
                    Sign up
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link href='/'>
                      <a
                        aria-label='Blink'
                        title='Blink'
                        className='inline-flex items-center'
                      >
                        <svg
                          className='w-8 text-blue-600'
                          viewBox='0 0 24 24'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeMiterlimit='10'
                          stroke='currentColor'
                          fill='none'
                        >
                          <rect x='3' y='1' width='7' height='12' />
                          <rect x='3' y='17' width='7' height='6' />
                          <rect x='14' y='1' width='7' height='6' />
                          <rect x='14' y='11' width='7' height='12' />
                        </svg>
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          Blink
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link href='/'>
                        <a
                          aria-label='Homepage'
                          title='Homepage'
                          className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600 ${
                            current === '/' && 'text-blue-600'
                          }`}
                        >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/courses'>
                        <a
                          aria-label='Browse courses'
                          title='Browse courses'
                          className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600 ${
                            current === '/courses' && 'text-blue-600'
                          }`}
                        >
                          Courses
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/contact'>
                        <a
                          aria-label='Contact us'
                          title='Contact us'
                          className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600 ${
                            current === '/contact' && 'text-blue-600'
                          }`}
                        >
                          Contact
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/about'>
                        <a
                          aria-label='About us'
                          title='About us'
                          className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600 ${
                            current === '/about' && 'text-blue-600'
                          }`}
                        >
                          About us
                        </a>
                      </Link>
                    </li>

                    {user !== null && (
                      <>
                        {user.role && user.role.includes('Instructor') ? (
                          <li>
                            <Link href='/instructor'>
                              <a
                                className='inline-flex items-center justify-center w-full h-12 px-4 font-medium tracking-wide bg-white transition duration-200 rounded shadow-md text-blue-700 hover:bg-blue-600 hover:text-white focus:shadow-outline focus:outline-none'
                                aria-label='Instructor dashboard'
                                title='Instructor dashboard'
                              >
                                Dashboard
                              </a>
                            </Link>
                          </li>
                        ) : (
                          <li>
                            <Link href='/user'>
                              <a
                                className='inline-flex items-center justify-center w-full h-12 px-4 font-medium tracking-wide bg-white transition duration-200 rounded shadow-md text-blue-700 hover:bg-blue-600 hover:text-white focus:shadow-outline focus:outline-none'
                                aria-label='User dashboard'
                                title='User dashboard'
                              >
                                Dashboard
                              </a>
                            </Link>
                          </li>
                        )}
                      </>
                    )}

                    {user !== null && (
                      <li>
                        <Link href='/logout'>
                          <a
                            className='inline-flex items-center justify-center w-full h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-white hover:text-blue-700 focus:shadow-outline focus:outline-none'
                            aria-label='Logout'
                            title='Logout'
                          >
                            Logout
                          </a>
                        </Link>
                      </li>
                    )}

                    {user === null && (
                      <>
                        <li>
                          <Link href='/login'>
                            <a
                              href='/'
                              className='inline-flex items-center justify-center w-full h-12 px-4 font-medium tracking-wide bg-white transition duration-200 rounded shadow-md text-blue-700 hover:bg-blue-600 hover:text-white focus:shadow-outline focus:outline-none'
                              aria-label='Sign in'
                              title='Sign in'
                            >
                              Login
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link href='/register'>
                            <a
                              className='inline-flex items-center justify-center w-full h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-white hover:text-blue-700 focus:shadow-outline focus:outline-none'
                              aria-label='Sign up'
                              title='Sign up'
                            >
                              Sign up
                            </a>
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
