import { useContext } from 'react'
import Link from 'next/link'
import { Context } from '../../../context/index'

const BecomeInstructor = () => {
  // Context
  const { state } = useContext(Context)
  const { user } = state
  return (
    <div className='px-4 py-8 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16'>
      <div className='md:flex justify-center space-y-2 space-x-4 items-center'>
        <div className='self-center'>
          <img
            className='object-cover w-full rounded shadow-lg'
            src='/images/become-instructor.svg'
            alt=''
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-center mb-6'>
            <h2 className='mb-6 text-2xl font-semibold uppercase tracking-tight text-gray-800 md:text-3xl sm:leading-none'>
              Become Instructor
            </h2>
            <p className='text-base text-gray-700 md:text-md'>
              Become Instructor at Blink & teach thousands of students!
            </p>
          </div>
          <div className='grid gap-5 row-gap-8 mb-6 sm:grid-cols-2'>
            <div className='bg-white border-l-4 shadow-sm border-gray-300'>
              <div className='h-full p-5 border border-l-0 rounded-r'>
                <h6 className='mb-2 font-semibold leading-5'>
                  Earn Extra Cash
                </h6>
                <p className='text-sm text-gray-900'>
                  Blink is a marketplace. Here instructor can sell their course
                  and earn money.
                </p>
              </div>
            </div>
            <div className='bg-white border-l-4 shadow-sm border-gray-300'>
              <div className='h-full p-5 border border-l-0 rounded-r'>
                <h6 className='mb-2 font-semibold leading-5'>
                  Spread knowledge
                </h6>
                <p className='text-sm text-gray-900'>
                  Become instructor today and start spreading your knowledge.
                </p>
              </div>
            </div>
          </div>

          <Link
            href={
              user !== null
                ? user.role.includes('Instructor')
                  ? '/instructor/course/create'
                  : '/user/become-instructor'
                : '/login'
            }
          >
            <a>
              <button className='inline-flex items-center  justify-center h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none'>
                Become Instructor
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BecomeInstructor
