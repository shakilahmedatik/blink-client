import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios'
import { SyncOutlined } from '@ant-design/icons'
import CourseBody from '../components/Courses/CourseBody'
axios.defaults.withCredentials = true

// export async function getServerSideProps() {
//   const { data } = await axios.get(`${process.env.API}/courses`)
//   return {
//     props: { courses: data },
//   }
// }

const Courses = () => {
  const [courses, setCourses] = useState(false)
  console.log(courses)
  useEffect(() => {
    const getCourses = async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/courses`)
      setCourses(data)
    }
    getCourses()
  }, [])

  return (
    <>
      <Navbar />
      {courses ? (
        <CourseBody allCourses={courses} />
      ) : (
        <div
          style={{ height: '85vh' }}
          className='flex justify-center items-center  text-7xl text-blue-600'
        >
          <SyncOutlined spin />
        </div>
      )}

      <Footer />
    </>
  )
}

export default Courses
