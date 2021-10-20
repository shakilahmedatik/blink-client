import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { Context } from '../../context'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [current, setCurrent] = useState('')
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])

  // Context
  const { state, dispatch } = useContext(Context)
  const { user } = state
  const router = useRouter()

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
    <div className='px-4 sticky top-0 z-50 bg-white shadow-xl mx-auto py-5  lg:py-0 md:max-w-full lg:max-w-full lg:px-24 '>
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
              <div className='relative inline-block '>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className='relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className='absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800'>
                    {user.role && user.role.includes('Instructor') ? (
                      <>
                        <Link href='/instructor'>
                          <a className='flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                            <svg
                              className='w-5 h-5 mx-1'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z'
                                fill='currentColor'
                              ></path>
                              <path
                                d='M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z'
                                fill='currentColor'
                              ></path>
                            </svg>

                            <span className='mx-1'>Dashboard</span>
                          </a>
                        </Link>

                        <Link href='/instructor/course/create'>
                          <a className='flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                            <svg
                              className='w-5 h-5 mx-1'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M18 22C15.8082 21.9947 14.0267 20.2306 14 18.039V16H9.99996V18.02C9.98892 20.2265 8.19321 22.0073 5.98669 22C3.78017 21.9926 1.99635 20.1999 2.00001 17.9934C2.00367 15.7868 3.79343 14 5.99996 14H7.99996V9.99999H5.99996C3.79343 9.99997 2.00367 8.21315 2.00001 6.00663C1.99635 3.8001 3.78017 2.00736 5.98669 1.99999C8.19321 1.99267 9.98892 3.77349 9.99996 5.97999V7.99999H14V5.99999C14 3.79085 15.7908 1.99999 18 1.99999C20.2091 1.99999 22 3.79085 22 5.99999C22 8.20913 20.2091 9.99999 18 9.99999H16V14H18C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22ZM16 16V18C16 19.1046 16.8954 20 18 20C19.1045 20 20 19.1046 20 18C20 16.8954 19.1045 16 18 16H16ZM5.99996 16C4.89539 16 3.99996 16.8954 3.99996 18C3.99996 19.1046 4.89539 20 5.99996 20C6.53211 20.0057 7.04412 19.7968 7.42043 19.4205C7.79674 19.0442 8.00563 18.5321 7.99996 18V16H5.99996ZM9.99996 9.99999V14H14V9.99999H9.99996ZM18 3.99999C17.4678 3.99431 16.9558 4.2032 16.5795 4.57952C16.2032 4.95583 15.9943 5.46784 16 5.99999V7.99999H18C18.5321 8.00567 19.0441 7.79678 19.4204 7.42047C19.7967 7.04416 20.0056 6.53215 20 5.99999C20.0056 5.46784 19.7967 4.95583 19.4204 4.57952C19.0441 4.2032 18.5321 3.99431 18 3.99999ZM5.99996 3.99999C5.4678 3.99431 4.95579 4.2032 4.57948 4.57952C4.20317 4.95583 3.99428 5.46784 3.99996 5.99999C3.99428 6.53215 4.20317 7.04416 4.57948 7.42047C4.95579 7.79678 5.4678 8.00567 5.99996 7.99999H7.99996V5.99999C8.00563 5.46784 7.79674 4.95583 7.42043 4.57952C7.04412 4.2032 6.53211 3.99431 5.99996 3.99999Z'
                                fill='currentColor'
                              ></path>
                            </svg>

                            <span className='mx-1'>Create Course</span>
                          </a>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link href='/user'>
                          <a className='flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                            <svg
                              className='w-5 h-5 mx-1'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z'
                                fill='currentColor'
                              ></path>
                              <path
                                d='M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z'
                                fill='currentColor'
                              ></path>
                            </svg>

                            <span className='mx-1'>Dashboard</span>
                          </a>
                        </Link>
                        <Link href='/user/become-instructor'>
                          <a className='flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                            <svg
                              className='w-5 h-5 mx-1'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3ZM6 8C6 6.34315 7.34315 5 9 5C10.6569 5 12 6.34315 12 8C12 9.65685 10.6569 11 9 11C7.34315 11 6 9.65685 6 8Z'
                                fill='currentColor'
                              ></path>
                              <path
                                d='M16.9084 8.21828C16.6271 8.07484 16.3158 8.00006 16 8.00006V6.00006C16.6316 6.00006 17.2542 6.14956 17.8169 6.43645C17.8789 6.46805 17.9399 6.50121 18 6.5359C18.4854 6.81614 18.9072 7.19569 19.2373 7.65055C19.6083 8.16172 19.8529 8.75347 19.9512 9.37737C20.0496 10.0013 19.9987 10.6396 19.8029 11.2401C19.6071 11.8405 19.2719 12.3861 18.8247 12.8321C18.3775 13.2782 17.8311 13.6119 17.2301 13.8062C16.6953 13.979 16.1308 14.037 15.5735 13.9772C15.5046 13.9698 15.4357 13.9606 15.367 13.9496C14.7438 13.8497 14.1531 13.6038 13.6431 13.2319L13.6421 13.2311L14.821 11.6156C15.0761 11.8017 15.3717 11.9248 15.6835 11.9747C15.9953 12.0247 16.3145 12.0001 16.615 11.903C16.9155 11.8059 17.1887 11.639 17.4123 11.416C17.6359 11.193 17.8035 10.9202 17.9014 10.62C17.9993 10.3198 18.0247 10.0006 17.9756 9.68869C17.9264 9.37675 17.8041 9.08089 17.6186 8.82531C17.4331 8.56974 17.1898 8.36172 16.9084 8.21828Z'
                                fill='currentColor'
                              ></path>
                              <path
                                d='M19.9981 21C19.9981 20.475 19.8947 19.9551 19.6938 19.47C19.4928 18.9849 19.1983 18.5442 18.8271 18.1729C18.4558 17.8017 18.0151 17.5072 17.53 17.3062C17.0449 17.1053 16.525 17.0019 16 17.0019V15C16.6821 15 17.3584 15.1163 18 15.3431C18.0996 15.3783 18.1983 15.4162 18.2961 15.4567C19.0241 15.7583 19.6855 16.2002 20.2426 16.7574C20.7998 17.3145 21.2417 17.9759 21.5433 18.7039C21.5838 18.8017 21.6217 18.9004 21.6569 19C21.8837 19.6416 22 20.3179 22 21H19.9981Z'
                                fill='currentColor'
                              ></path>
                              <path
                                d='M16 21H14C14 18.2386 11.7614 16 9 16C6.23858 16 4 18.2386 4 21H2C2 17.134 5.13401 14 9 14C12.866 14 16 17.134 16 21Z'
                                fill='currentColor'
                              ></path>
                            </svg>

                            <span className='mx-1'>Become Instructor</span>
                          </a>
                        </Link>
                      </>
                    )}

                    <hr className='border-gray-200 dark:border-gray-700 ' />

                    <div
                      onClick={() => logout()}
                      className='flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
                    >
                      <svg
                        className='w-5 h-5 mx-1'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z'
                          fill='currentColor'
                        ></path>
                      </svg>

                      <span className='mx-1'>Sign Out</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {user === null && (
            <>
              <li>
                <Link href='/login'>
                  <a
                    className='inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide bg-gray-200 transition duration-200 rounded shadow-md text-blue-700 hover:bg-blue-600 hover:text-white focus:shadow-outline focus:outline-none'
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
