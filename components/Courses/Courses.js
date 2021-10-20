import React from 'react'
import axios from 'axios'
import CourseCard from '../Cards/CourseCard'
axios.defaults.withCredentials = true

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`)
  return {
    props: { courses: data },
  }
}

const AllCourses = ({ courses }) => {
  console.log(courses)
  return (
    <section className='container p-6 mx-auto bg-white'>
      <div className='flex items-center justify-center'>
        <div className='grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'></div>
      </div>
    </section>
  )
}

export default AllCourses
