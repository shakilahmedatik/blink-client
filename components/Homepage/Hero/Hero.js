import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <div className='px-4 py-8 lg:py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto md:px-16'>
        <div className='items-center lg:flex'>
          <div className='w-full lg:w-1/2'>
            <div className='lg:max-w-lg'>
              <h1 className='text-2xl lg:text-4xl font-semibold text-gray-800 uppercase '>
                An outstanding place for better education
              </h1>
              <p className='mt-2 py-4 text-base md:text-md text-gray-700 '>
                To unlock the true potential of e-learning, it needs to be
                people-centered. It has to be rooted in the day-to-day lives of
                people within an organization who are learning and growing as
                individuals, while also supporting them and making them feel
                valued.
              </p>

              <Link href='/courses'>
                <a>
                  <button className='inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none'>
                    Browse Course
                  </button>
                </a>
              </Link>
              <Link href='/about'>
                <a>
                  <button className='inline-flex mx-5 items-center justify-center h-12 px-4 font-medium tracking-wide bg-gray-200 transition duration-200 rounded shadow-md text-gray-700 hover:bg-blue-600 hover:text-white focus:shadow-outline focus:outline-none'>
                    Learn More
                  </button>
                </a>
              </Link>
            </div>
          </div>

          <div className='flex items-center justify-end w-full mt-12 lg:mt-0 lg:w-1/2'>
            <img
              className='w-full h-full lg:max-w-2xl'
              src='/images/hero-svg.svg'
              alt='hero'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
