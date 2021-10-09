import React from 'react'

import { currencyFormatter } from '../../utils/helper'

const SingleCourseHeader = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
}) => {
  const {
    name,
    description,
    instructor,
    updatedAt,
    lessons,
    image,
    price,
    paid,
    category,
  } = course
  return (
    <div style={{ backgroundImage: `url('/images/endless.svg')` }}>
      <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='flex flex-col items-center justify-between lg:flex-row'>
          <div className='mb-10 lg:max-w-lg lg:pr-5 lg:mb-0'>
            <div className='max-w-xl mb-6'>
              <div>
                <p className='inline-block px-3  mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gray-600'>
                  {category}
                </p>
              </div>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
                {name}
              </h2>
              <p className='text-base ml-1 line-clamp-3 text-gray-100 '>
                {description}
              </p>
              <div className='flex text-white -mt-2 items-center'>
                <img
                  src='/images/profile.svg'
                  className='w-6 h-6 text-white'
                  alt='author'
                />
                <p className='px-2 mt-3 text-base line-clamp-3 text-white md:text-md'>
                  Created by {instructor.name}
                </p>
              </div>
              <p className='px-2  text-base line-clamp-3 text-white md:text-md'>
                Last updated {new Date(updatedAt).toLocaleString()}
              </p>
              <p className='px-2  text-xl line-clamp-3 text-white lg:text-3xl'>
                {paid
                  ? currencyFormatter({ amount: price, currency: 'usd' })
                  : 'Free'}
              </p>
            </div>
            <div className='flex flex-col items-center md:flex-row'>
              <a
                href='/'
                className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-gray-600 hover:bg-gray-700 focus:shadow-outline focus:outline-none'
              >
                <span className='mr-3'>Enroll Now</span>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4'
                >
                  <polyline
                    fill='none'
                    stroke='currentColor'
                    strokeMiterlimit='10'
                    points='4,4 22,4 19,14 4,14 '
                  />
                  <circle
                    cx='4'
                    cy='22'
                    r='2'
                    strokeLinejoin='miter'
                    strokeLinecap='square'
                    stroke='none'
                    fill='currentColor'
                  />
                  <circle
                    cx='20'
                    cy='22'
                    r='2'
                    strokeLinejoin='miter'
                    strokeLinecap='square'
                    stroke='none'
                    fill='currentColor'
                  />
                  <polyline
                    fill='none'
                    stroke='currentColor'
                    strokeMiterlimit='10'
                    points='1,1 4,4 4,14 2,18 23,18 '
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='relative lg:w-1/2'>
            <img
              className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
              src={image}
              alt=''
            />
            {lessons[0].video && lessons[0].video.secure_url && (
              <div
                onClick={() => {
                  setPreview(lessons[0].video.secure_url)
                  setShowModal(!showModal)
                }}
                aria-label='Play Video'
                className='absolute cursor-pointer inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25'
              >
                <div className='flex  items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110'>
                  <svg
                    className='w-10 text-gray-900'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z' />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCourseHeader
