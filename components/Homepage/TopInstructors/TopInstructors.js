const TopInstructors = () => {
  return (
    <div className='px-4 py-8 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16'>
      <p className='text-center mb-6 text-2xl font-semibold uppercase tracking-tight text-gray-800 md:text-3xl'>
        Top Instructors
      </p>
      <p className='text-center mb-24 text-base text-gray-700 md:text-md'>
        Learn from the best instructors around the globe at Blink
      </p>
      <div className='flex items-center space-y-24 lg:space-y-0 flex-col lg:flex-row justify-center'>
        <div className='p-4 relative'>
          <div className='text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2'>
            <div className='relative'>
              <img
                alt='profile'
                src='https://i.ibb.co/GsZjY1T/Andrei-Neagoie.jpg'
                className='mx-auto object-cover rounded-lg h-40 w-40  border-4 border-blue-600 dark:border-gray-800'
              />
            </div>
          </div>
          <div className='bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg px-8 py-4 pt-24'>
            <div className='text-center'>
              <p className='text-2xl text-gray-800 dark:text-white'>
                Andrei Neagoie
              </p>
              <p className='text-xl text-gray-500 dark:text-gray-200 font-light'>
                Web Developer
              </p>
              <p className='text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light'>
                Andrei is the instructor of some of the popular highest rated
                programming and technical courses online.
              </p>
            </div>
          </div>
        </div>
        <div className='p-4 relative'>
          <div className='text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2'>
            <div className='relative'>
              <img
                alt='profile'
                src='https://i.ibb.co/5GrX8qq/caleb-kingston.jpg'
                className='mx-auto object-cover rounded-lg h-40 w-40  border-4 border-blue-600 dark:border-gray-800'
              />
            </div>
          </div>
          <div className='bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg px-8 py-4 pt-24'>
            <div className='text-center'>
              <p className='text-2xl text-gray-800 dark:text-white'>
                Caleb Kingston
              </p>
              <p className='text-xl text-gray-500 dark:text-gray-200 font-light'>
                Graphics Designer
              </p>
              <p className='text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light'>
                Sharing is who I am, and teaching is where I am at my best,
                because I've been on both sides of that equation.
              </p>
            </div>
          </div>
        </div>
        <div className='p-4 relative'>
          <div className='text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2'>
            <div className='relative'>
              <img
                alt='profile'
                src='https://i.ibb.co/b3sxzqN/Angela-Yu.jpg'
                className='mx-auto object-cover rounded-lg h-40 w-40  border-4 border-blue-600 dark:border-gray-800'
              />
            </div>
          </div>
          <div className='bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg px-8 py-4 pt-24'>
            <div className='text-center'>
              <p className='text-2xl text-gray-800 dark:text-white'>
                Angela Yu
              </p>
              <p className='text-xl text-gray-500 dark:text-gray-200 font-light'>
                App Developer
              </p>
              <p className='text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light'>
                Hi! My name is Angela Yu! I'm a passionate software engineer
                with two decades of experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopInstructors
