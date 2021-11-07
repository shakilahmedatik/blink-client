import React, { useState, useEffect, createElement } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../../components/Navbar/Navbar'
import StudentRoute from '../../../components/Routes/StudentRoute'
import { Button, Menu, Avatar } from 'antd'
const { Item } = Menu
import ReactPlayer from 'react-player'
import ReactMarkdown from 'react-markdown'
import {
  PlayCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CheckCircleFilled,
  MinusCircleFilled,
} from '@ant-design/icons'
import axios from 'axios'
axios.defaults.withCredentials = true

const SingleCourse = () => {
  const [clicked, setClicked] = useState(-1)
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [course, setCourse] = useState({ lessons: [] })
  const [completedLessons, setCompletedLessons] = useState([])
  // force state update
  const [updateState, setUpdateState] = useState(false)

  // router
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (slug) loadCourse()
  }, [slug])

  useEffect(() => {
    if (course) loadCompletedLessons()
  }, [course])

  const loadCourse = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/user/course/${slug}`
    )
    setCourse(data)
  }

  const loadCompletedLessons = async () => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/list-completed`,
      {
        courseId: course._id,
      }
    )
    // console.log('COMPLETED LESSONS => ', data)
    setCompletedLessons(data)
  }

  const markCompleted = async () => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/mark-completed`,
      {
        courseId: course._id,
        lessonId: course.lessons[clicked]._id,
      }
    )
    // console.log(data)
    setCompletedLessons([...completedLessons, course.lessons[clicked]._id])
  }

  const markIncomplete = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/mark-incomplete`,
        {
          courseId: course._id,
          lessonId: course.lessons[clicked]._id,
        }
      )
      // console.log(data)
      const all = completedLessons
      // console.log('ALL => ', all)
      const index = all.indexOf(course.lessons[clicked]._id)
      if (index > -1) {
        all.splice(index, 1)
        // console.log('ALL WITHOUT REMOVED => ', all)
        setCompletedLessons(all)
        setUpdateState(!updateState)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navbar />
      <StudentRoute>
        <div className='sm:flex '>
          <div>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className='block w-full p-3 text-center rounded-sm text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400'
            >
              {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}{' '}
              {!collapsed && 'Lessons'}
            </button>
            <Menu
              mode='inline'
              defaultSelectedKeys={[clicked]}
              inlineCollapsed={collapsed}
            >
              {course.lessons.map((lesson, index) => (
                <Item
                  onClick={() => setClicked(index)}
                  key={index}
                  icon={<Avatar>{index + 1}</Avatar>}
                >
                  {lesson.title.substring(0, 30)}
                  {completedLessons.includes(lesson._id) ? (
                    <div className='float-right text-lg text-green-500 ml-3'>
                      <CheckCircleFilled />
                    </div>
                  ) : (
                    <div className='float-right text-lg text-red-500 ml-3'>
                      <MinusCircleFilled />
                    </div>
                  )}
                </Item>
              ))}
            </Menu>
          </div>

          <div className='flex-1 mx-6'>
            {clicked !== -1 ? (
              <>
                <div className='flex items-center justify-between py-2 mb-2 px-2 bg-indigo-100 '>
                  <span>{course.lessons[clicked].title.substring(0, 30)}</span>

                  {completedLessons.includes(course.lessons[clicked]._id) ? (
                    <span
                      className='cursor-pointer px-3 py-1 rounded-sm text-white font-bold bg-red-400 hover:bg-gray-200 hover:text-gray-700'
                      onClick={markIncomplete}
                    >
                      Mark as incomplete
                    </span>
                  ) : (
                    <span
                      className='cursor-pointer px-3 py-1 rounded-sm text-white font-bold bg-green-400 hover:bg-gray-200 hover:text-gray-700'
                      onClick={markCompleted}
                    >
                      Mark as Completed
                    </span>
                  )}
                </div>
                {course.lessons[clicked].video &&
                  course.lessons[clicked].video.secure_url && (
                    <>
                      <div className='container w-full lg:w-3/4  mx-auto'>
                        <ReactPlayer
                          className=''
                          url={course.lessons[clicked].video.secure_url}
                          width='100%'
                          height='100%'
                          controls
                          onEnded={() => markCompleted()}
                        />
                      </div>
                    </>
                  )}
                <hr className='my-2' />
                <ReactMarkdown
                  children={course.lessons[clicked].content}
                  className='mt-6'
                />
              </>
            ) : (
              <div className='flex  w-full pt-48 justify-center '>
                <div className='rounded-lg shadow-xl bg-gray-100 px-12 py-8'>
                  <div className='text-center text-blue-500'>
                    <PlayCircleOutlined className=' text-4xl' />
                    <p className='text-gray-500 text-lg'>
                      Click on the lessons to start learning
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </StudentRoute>
    </>
  )
}

export default SingleCourse
