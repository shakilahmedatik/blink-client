import React from 'react'
import Link from 'next/link'
import { currencyFormatter } from '../../utils/helper'

const CourseCard = ({ course }) => {
  const { name, instructor, description, price, paid, image, slug, category } =
    course
  return (
    <div className='max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
      <Link href={`/course/${slug}`}>
        <a>
          <img
            className='object-cover object-center w-full h-40'
            src={image}
            alt='avatar'
          />
          <div className='inline-flex items-center justify-center bg-white leading-none rounded-b-full px-6 w-full py-2 shadow text-teal text-sm'>
            <span className='inline-flex bg-indigo-100 shadow text-gray-600 font-light uppercase rounded-full h-6 px-3 justify-center items-center'>
              {category}
            </span>
          </div>
          <div className='px-6 py-4'>
            <h1 className='text-xl line-clamp-2 font-semibold text-gray-800 dark:text-white'>
              {name}
            </h1>

            <div className='flex text-gray-700 -mt-2 items-center'>
              <svg
                className='w-6 h-6 '
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
              <h1 className='px-2 mt-3 text-sm'>{instructor.name}</h1>
            </div>
            <p className=' line-clamp-2 text-gray-700 dark:text-gray-400'>
              {description}
            </p>
            <div className='flex items-center mt-4 text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                />
              </svg>
              <h1 className='px-2 mt-1 text-sm'>
                {paid
                  ? currencyFormatter({ amount: price, currency: 'usd' })
                  : 'Free'}
              </h1>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default CourseCard
