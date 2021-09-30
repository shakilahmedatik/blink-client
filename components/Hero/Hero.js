import React from 'react'
import Image from 'next/image'
import heroImg from '../.././public/images/Support.svg'

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url('/images/fall.svg')` }}
      className='font-mono'
    >
      <div className='container mx-auto flex px-12 py-16 md:py-4  md:flex-row flex-col  items-center'>
        <div className='lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-6xl uppercase text-3xl mb-4 font-medium bg-gradient-to-r from-green-400 to-blue-200 text-transparent bg-clip-text'>
            Welcome to Blink
          </h1>
          <p className='mb-8 text-gray-300 leading-relaxed'>
            To unlock the true potential of e-learning to train successful
            employees, it needs to be people-centered. It has to be rooted in
            the day-to-day lives of people within an organization who are
            learning and growing as individuals, while also supporting them and
            making them feel valued.
          </p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white border-0 py-2 px-6 focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 rounded text-lg'>
              Browse Course
            </button>
            <button className='ml-4 inline-flex text-white border-0 py-2 px-6 focus:outline-none bg-gradient-to-r from-blue-500 to-green-400 hover:from-green-400 hover:to-blue-500 rounded text-lg'>
              Learn More
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg  md:w-1/2 w-5/6'>
          <Image src={heroImg} alt='Picture of hero section' />
        </div>
      </div>
    </section>
  )
}

export default Hero
