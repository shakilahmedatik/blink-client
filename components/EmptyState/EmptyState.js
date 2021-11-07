import React from 'react'
import Link from 'next/link'

const EmptyState = () => {
  return (
    <section className='max-w-lg mt-8 px-4  py-12 mx-auto'>
      <img
        className='mx-auto sm:w-1/4'
        src='https://kutty.netlify.app/empty.png'
      />
      <h2 className='mt-2 text-2xl font-medium text-center text-gray-600'>
        This is where you’ll manage your courses.
      </h2>
      <p className='mt-1 text-center text-gray-600'>
        You didn't create any course yet. You can instantly create a course and
        update it later. But a course can only be published if it has at least 5
        lessons.
      </p>
      <div className='flex flex-col items-center justify-center mt-4 space-y-1 md:flex-row md:space-y-0 md:space-x-1'>
        <Link href='/instructor/course/create'>
          <a className='w-full md:w-auto py-2 px-6 inline-flex text-white transition duration-200  shadow-md bg-blue-600 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none rounded text-lg'>
            Create Course
          </a>
        </Link>
        <Link href='/instructor'>
          <a className='w-full md:w-auto py-2 px-9 inline-flex text-white transition duration-200  shadow-md bg-blue-600 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none rounded text-lg'>
            Dashboard
          </a>
        </Link>
      </div>
    </section>
  )
}

export default EmptyState
