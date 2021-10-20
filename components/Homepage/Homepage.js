import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero/Hero'
import Footer from '../Footer/Footer'
import Details from './Details/Details'
import Newsletter from './Newsletter/Newsletter'
import BecomeInstructor from './BecomeInstructor/BecomeInstructor'
import TopInstructors from './TopInstructors/TopInstructors'
import Testimonials from './Testimonials/Testimonials'
import Statistics from './Statistics/Statistics'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Details />
      <BecomeInstructor />
      <TopInstructors />
      <Statistics />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Homepage
