import { useState, useEffect } from 'react'
import axios from 'axios'
import { Avatar, Badge, Tooltip } from 'antd'
import InstructorRoute from '../../components/Routes/InstructorRoute'
import Link from 'next/link'
import { CheckCircleOutlined, WarningOutlined } from '@ant-design/icons'
import EmptyState from '../../components/EmptyState/EmptyState'

const InstructorIndex = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    loadCourses()
  }, [])

  const loadCourses = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/instructor-courses`
    )
    setCourses(data)
  }

  return (
    <InstructorRoute>
      <h1 className='text-center text-4xl font-bold text-gray-400 uppercase py-5'>
        Instructor Dashboard
      </h1>
      {courses.length > 0 ? (
        <>
          {courses.map(course => (
            <section
              key={course._id}
              className='bg-gray-100 m-5 shadow rounded-lg dark:bg-gray-800'
            >
              <div className='container p-5  mx-auto'>
                <div className='items-center sm:flex'>
                  <div className='lg:w-1/2 '>
                    <Link
                      href={`/instructor/course/view/${course.slug}`}
                      className='cursor-pointer'
                    >
                      <a>
                        <h2 className=' text-2xl font-semibold text-gray-700'>
                          {course.name}
                        </h2>
                      </a>
                    </Link>
                    <span className='px-3 py-1 text-xs text-indigo-800 uppercase bg-indigo-200 rounded-full dark:bg-indigo-300 dark:text-indigo-900'>
                      {course.lessons.length} Lessons
                    </span>
                    {course.lessons.length < 5 ? (
                      <div className='flex  mt-4 text-red-400'>
                        <svg
                          viewBox='0 0 40 40'
                          className='w-6 h-6 fill-current'
                        >
                          <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z'></path>
                        </svg>
                        <p className=' font-semibold mx-1 md:max-w-md'>
                          At least 5 lessons are required to publish a course.
                        </p>
                      </div>
                    ) : course.published ? (
                      <div className='flex  mt-4 text-blue-400'>
                        <Tooltip title='Published'>
                          <svg
                            className='w-6 h-6 fill-current'
                            viewBox='0 0 40 40'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z' />
                          </svg>
                        </Tooltip>
                        <p className=' font-semibold mx-1 md:max-w-md'>
                          Your course is live in the marketplace.
                        </p>
                      </div>
                    ) : (
                      <div className='flex  mt-4 text-yellow-400'>
                        <Tooltip title='Unpublished'>
                          <svg
                            className='w-6 h-6 fill-current '
                            viewBox='0 0 40 40'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z' />
                          </svg>
                        </Tooltip>

                        <p className=' font-semibold mx-1 md:max-w-md'>
                          Your course is ready to be published.
                        </p>
                      </div>
                    )}
                    {course.published ? (
                      <div className='flex text-green-500'>
                        <p>
                          <span className='text-gray-500'>Status:</span>{' '}
                          Published
                        </p>
                        <CheckCircleOutlined className='text-lg mx-2 cursor-pointer ' />
                      </div>
                    ) : (
                      <div className='flex text-yellow-500'>
                        <p>
                          <span className='text-gray-500'>Status:</span> Pending
                        </p>
                        <WarningOutlined className='text-lg mx-2 cursor-pointer ' />
                      </div>
                    )}
                  </div>

                  <div className='mt-8 lg:mt-0 lg:w-1/2'>
                    <div className='flex items-center justify-center lg:justify-end'>
                      <div className='max-w-lg'>
                        <img
                          className='object-cover object-center w-full h-48 sm:h-32 rounded-md shadow'
                          src={course.image}
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </>
      ) : (
        <EmptyState />
      )}
    </InstructorRoute>
  )
}

export default InstructorIndex
