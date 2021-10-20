import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className='grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 '>
        <div className='flex flex-col justify-between'>
          <div className='space-y-2'>
            <h2 className='text-4xl font-bold leading-tight lg:text-5xl'>
              Let's talk!
            </h2>
            <div className=''>
              Got a question? Contact us. We are waiting 24/7 just for you!
            </div>
          </div>
          <img
            src='/images/contact.svg'
            alt='contact'
            className='p-6 h-52 md:h-64'
          />
        </div>
        <form className='space-y-6 n'>
          <div>
            <label htmlFor='name' className='text-sm'>
              Full name
            </label>
            <input
              id='name'
              type='text'
              placeholder=''
              className='w-full p-3 rounded bg-blue-100'
            />
          </div>
          <div>
            <label htmlFor='email' className='text-sm'>
              Email
            </label>
            <input
              id='email'
              type='email'
              className='w-full p-3 rounded bg-blue-100'
            />
          </div>
          <div>
            <label htmlFor='message' className='text-sm'>
              Message
            </label>
            <textarea
              id='message'
              rows='3'
              className='w-full p-3 rounded bg-blue-100'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full p-3 text-sm font-bold tracking-wide uppercase rounded text-white transition duration-200  shadow-md bg-blue-600 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none'
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Contact
