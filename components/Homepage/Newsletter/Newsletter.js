import React from 'react'

const Newsletter = () => {
  return (
    <div className='px-4 py-8 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16'>
      <div className='flex justify-center items-center'>
        <div className='w-1/2'>
          <h2 className='text-2xl  font-semibold uppercase tracking-tight text-gray-800 md:text-3xl'>
            We&#x27;ve got more coming...
          </h2>
          <p className='mt-2 max-w-xl text-base text-gray-400'>
            Want to hear from us when we add new components? Sign up for our
            newsletter and we&#x27;ll email you every time we release a new
            batch of components.
          </p>

          <div className='sm:flex justify-start mt-6'>
            <form className='flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center'>
              <div className=' relative '>
                <input
                  type='text'
                  id='"form-subscribe-Subscribe'
                  className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                  placeholder='Email'
                />
              </div>
              <button
                className='flex-shrink-0 px-4 py-2 text-base font-semibold text-white transition duration-200 rounded-lg shadow-md bg-blue-600 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none'
                type='submit'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='w-1/2'>
          <img
            className='max-w-2/3 object-cover mx-auto'
            src='/images/letter-subscribe.svg'
            alt='subscribe'
          />
        </div>
      </div>
    </div>
  )
}

export default Newsletter
