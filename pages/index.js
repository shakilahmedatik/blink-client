import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import TopNav from '../components/Navbar/TopNav'
import CourseCard from '../components/Cards/CourseCard'
axios.defaults.withCredentials = true

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`)
  return {
    props: { courses: data },
  }
}

export default function Home({ courses }) {
  return (
    <>
      <TopNav />
      <Hero />
      <section className='container p-6 mx-auto bg-white'>
        <div className='flex items-center justify-center'>
          <div className='grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {courses.map(course => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
