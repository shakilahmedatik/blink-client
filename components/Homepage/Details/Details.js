import React from 'react'
import Link from 'next/link'

const Details = () => {
  return (
    <div className='container px-4 py-8 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className=' mb-6  leading-none tracking-tight text-2xl lg:text-3xl font-semibold text-gray-800 uppercase md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-600 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='df31b9f6-a505-42f8-af91-d2b7c3218e5c'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>Discover</span>
          </span>{' '}
          a new way of learning, unlock possibilities
        </h2>
        <p className='text-base text-gray-700 md:text-md'>
          Discover best classes for the best learning. Be an achiever with good
          education. Passionately involved in education.
        </p>
      </div>
      <div className='grid gap-8 row-gap-5 lg:grid-cols-3'>
        <div className='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl'>
          <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-600 group-hover:scale-x-100' />
          <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-600 group-hover:scale-y-100' />
          <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-600 group-hover:scale-x-100' />
          <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-600 group-hover:scale-y-100' />
          <div className='relative p-5 bg-white rounded-sm'>
            <div className='flex flex-col mb-2 lg:items-center lg:flex-row'>
              <div className='flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
              <h6 className='font-semibold leading-5'>Best Instructors</h6>
            </div>
            <p className='mb-2 text-sm text-gray-900'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam.
            </p>
            <Link href='/about'>
              <a
                aria-label=''
                className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-deep-purple-800'
              >
                Learn more
              </a>
            </Link>
          </div>
        </div>
        <div className='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl'>
          <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-600 group-hover:scale-x-100' />
          <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-600 group-hover:scale-y-100' />
          <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-600 group-hover:scale-x-100' />
          <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-600 group-hover:scale-y-100' />
          <div className='relative p-5 bg-white rounded-sm'>
            <div className='flex flex-col mb-2 lg:items-center lg:flex-row'>
              <div className='flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
              <h6 className='font-semibold leading-5'>Easy Learning</h6>
            </div>
            <p className='mb-2 text-sm text-gray-900'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam.
            </p>
            <Link href='/about'>
              <a
                aria-label=''
                className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-deep-purple-800'
              >
                Learn more
              </a>
            </Link>
          </div>
        </div>
        <div className='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl'>
          <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-600 group-hover:scale-x-100' />
          <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-600 group-hover:scale-y-100' />
          <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-600 group-hover:scale-x-100' />
          <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-600 group-hover:scale-y-100' />
          <div className='relative p-5 bg-white rounded-sm'>
            <div className='flex flex-col mb-2 lg:items-center lg:flex-row'>
              <div className='flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
              <h6 className='font-semibold leading-5'>Affordable Price</h6>
            </div>
            <p className='mb-2 text-sm text-gray-900'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam.
            </p>
            <Link href='/about'>
              <a
                aria-label='Learn more'
                className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-deep-purple-800'
              >
                Learn more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
