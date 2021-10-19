import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'

const Header = () => {
  return (
    <>
      <Navbar />
      <div class='container px-6 py-16 mx-auto'>
        <div class='items-center lg:flex'>
          <div class='w-full lg:w-1/2'>
            <div class='lg:max-w-lg'>
              <h1 class='text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl'>
                An outstanding place for better education
              </h1>
              <p class='mt-2 text-gray-600 dark:text-gray-400'>
                To unlock the true potential of e-learning, it needs to be
                people-centered. It has to be rooted in the day-to-day lives of
                people within an organization who are learning and growing as
                individuals, while also supporting them and making them feel
                valued.
              </p>
              <button class='w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-indigo-600 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500'>
                Browse Course
              </button>
            </div>
          </div>

          <div class='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
            <img
              class='w-full h-full lg:max-w-2xl'
              src='https://merakiui.com/_nuxt/img/Catalogue-pana.666df84.svg'
              alt='hero'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
