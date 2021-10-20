import { useState, useContext, useEffect } from 'react'
import { Context } from '../../context'
import UserRoute from '../../components/Routes/UserRoute'
import { Tooltip } from 'antd'
import Link from 'next/link'
import {
  SyncOutlined,
  PlayCircleOutlined,
  UserOutlined,
} from '@ant-design/icons'
import axios from 'axios'
axios.defaults.withCredentials = true

const UserIndex = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)

  const {
    state: { user },
  } = useContext(Context)

  useEffect(() => {
    loadCourses()
  }, [])

  const loadCourses = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/user-courses`
      )
      setCourses(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <UserRoute>
      {loading && (
        <div className='flex justify-center items-center h-screen text-7xl text-indigo-600'>
          <SyncOutlined spin />
        </div>
      )}

      <h1 className='text-center text-2xl font-semibold uppercase tracking-tight text-gray-800 md:text-4xl sm:leading-none py-6'>
        User Dashboard
      </h1>

      {courses &&
        courses.map(course => (
          <section
            key={course._id}
            className='bg-gray-100 m-5 shadow rounded-lg dark:bg-gray-800'
          >
            <div className='container p-5  mx-auto'>
              <div className='items-center sm:flex'>
                <div className='lg:w-1/2 '>
                  <Link
                    href={`/user/course/${course.slug}`}
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

                  <div className='flex py-2'>
                    <UserOutlined className='text-lg cursor-pointer ' />
                    <p>
                      <span className='text-gray-500 mx-2'>Instructor:</span>{' '}
                      {course.instructor.name}
                    </p>
                  </div>

                  <div>
                    <Link href={`/user/course/${course.slug}`}>
                      <a className='bg-blue-100 p-3 rounded-lg text-blue-500 shadow cursor-pointer'>
                        <Tooltip title='Play'>
                          <PlayCircleOutlined className='text-xl' />
                        </Tooltip>
                      </a>
                    </Link>
                  </div>
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
    </UserRoute>
  )
}

export default UserIndex
