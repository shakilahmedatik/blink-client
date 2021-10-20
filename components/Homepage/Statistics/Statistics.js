import React from 'react'

const Statistics = () => {
  return (
    <div className='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:py-16'>
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='text-center'>
          <div className='flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-blue-200 sm:w-12 sm:h-12'>
            <svg
              className='w-8 h-8 text-blue-600 sm:w-10 sm:h-10'
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
          <h6 className='text-4xl font-bold text-blue-600'>819</h6>
          <p className='mb-2 font-bold text-md'>Enrolled</p>
          <p className='text-gray-700'>
            It’s something that’s many of the wisest people in history have kept
            in mind.
          </p>
        </div>
        <div className='text-center'>
          <div className='flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-blue-200 sm:w-12 sm:h-12'>
            <svg
              className='w-8 h-8 text-blue-600 sm:w-10 sm:h-10'
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
          <h6 className='text-4xl font-bold text-blue-600'>1.3K</h6>
          <p className='mb-2 font-bold text-md'>Users</p>
          <p className='text-gray-700'>
            For many men, the acquisition of wealth does not end their troubles,
            it only changes them.
          </p>
        </div>
        <div className='text-center'>
          <div className='flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-blue-200 sm:w-12 sm:h-12'>
            <svg
              className='w-8 h-8 text-blue-600 sm:w-10 sm:h-10'
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
          <h6 className='text-4xl font-bold text-blue-600'>91</h6>
          <p className='mb-2 font-bold text-md'>Courses</p>
          <p className='text-gray-700'>
            It's a helluva start, being able to recognize what makes you happy
            today, in this moment.
          </p>
        </div>
        <div className='text-center'>
          <div className='flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-blue-200 sm:w-12 sm:h-12'>
            <svg
              className='w-8 h-8 text-blue-600 sm:w-10 sm:h-10'
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
          <h6 className='text-4xl font-bold text-blue-600'>52</h6>
          <p className='mb-2 font-bold text-md'>Instructors</p>
          <p className='text-gray-700'>
            Happiness is when what you think, what you say, and what you do are
            in harmony.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Statistics
