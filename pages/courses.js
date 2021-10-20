import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios'
import CourseBody from '../components/Courses/CourseBody'
axios.defaults.withCredentials = true

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`)
  return {
    props: { courses: data },
  }
}

const Courses = ({ courses }) => {
  return (
    <>
      <Navbar />
      <CourseBody allCourses={courses} />

      <Footer />
    </>
  )
}

export default Courses
