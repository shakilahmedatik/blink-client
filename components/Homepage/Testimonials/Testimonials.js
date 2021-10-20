import React from 'react'

const Testimonials = () => {
  return (
    <div className='px-4 py-8 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16'>
      <div className='grid items-center gap-4 xl:grid-cols-5'>
        <div className='max-w-2xl mx-auto  space-y-8 text-center xl:col-span-2 xl:text-left'>
          <h2 className='text-2xl  font-semibold uppercase tracking-tight text-gray-800 md:text-3xl'>
            What our clients say about Blink LTD
          </h2>
          <img src='/images/feedback.svg' alt='feedback' />
        </div>
        <div className='p-6 xl:col-span-3'>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='grid content-center gap-4'>
              <div className='p-6 rounded shadow-md dark:bg-coolGray-900'>
                <p>
                  Course structure and teaching is good, but felt difficulty
                  search most of the things on own, due to the old content of
                  the course, update could help better and uncaught exceptions ,
                  mocking are quite confusing had to spend more time to read
                  from external blogs, overall, nice course and great
                  explanation by Instructor.
                </p>
                <div className='flex items-center mt-4 space-x-4'>
                  <img
                    src='https://source.unsplash.com/51x51/?portrait'
                    alt=''
                    className='w-12 h-12 bg-center bg-cover rounded-full dark:bg-coolGray-500'
                  />
                  <div>
                    <p className='text-lg font-semibold'>Leroy Jenkins</p>
                    <p className='text-sm dark:text-coolGray-400'>
                      CTO of Company Co.
                    </p>
                  </div>
                </div>
              </div>
              <div className='p-6 rounded shadow-md dark:bg-coolGray-900'>
                <p>
                  I haven't had any experience with coding or programming and
                  this course is a gem! Andrei also gave in so much effort in
                  this not only in technical and programming aspect but with
                  lots of tips and articles. He owns up to the title adobe
                  certified instructor.
                </p>
                <div className='flex items-center mt-4 space-x-4'>
                  <img
                    src='https://source.unsplash.com/52x52/?portrait'
                    alt=''
                    className='w-12 h-12 bg-center bg-cover rounded-full dark:bg-coolGray-500'
                  />
                  <div>
                    <p className='text-lg font-semibold'>Leroy Jenkins</p>
                    <p className='text-sm dark:text-coolGray-400'>
                      CTO of Company Co.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid content-center gap-4'>
              <div className='p-6 rounded shadow-md dark:bg-coolGray-900'>
                <p>
                  So far this is the best course I have followed on here. Dan
                  explains the topics well, has fun projects and delivers in a
                  very engaging way. I find the course very well structured and
                  to the point. Even though I already have followed almost every
                  after effects course that is on here, I learned new tricks and
                  some basic concepts became clear.
                </p>
                <div className='flex items-center mt-4 space-x-4'>
                  <img
                    src='https://source.unsplash.com/53x53/?portrait'
                    alt=''
                    className='w-12 h-12 bg-center bg-cover rounded-full dark:bg-coolGray-500'
                  />
                  <div>
                    <p className='text-lg font-semibold'>Leroy Jenkins</p>
                    <p className='text-sm dark:text-coolGray-400'>
                      CTO of Company Co.
                    </p>
                  </div>
                </div>
              </div>
              <div className='p-6 rounded shadow-md dark:bg-coolGray-900'>
                <p>
                  This is another whirlwind romp through After Effects. If
                  you're following along, I'd recommend slowing down the
                  playback a bit. It's information that I really don't know any
                  other good place to get, and the instructor is personable and
                  obviously knows what he's doing, even if at the end of the
                  course I was at somewhat of a loss to explain what just
                  happened. This is great to have on your reference shelf.
                </p>
                <div className='flex items-center mt-4 space-x-4'>
                  <img
                    src='https://source.unsplash.com/54x54/?portrait'
                    alt=''
                    className='w-12 h-12 bg-center bg-cover rounded-full dark:bg-coolGray-500'
                  />
                  <div>
                    <p className='text-lg font-semibold'>Leroy Jenkins</p>
                    <p className='text-sm dark:text-coolGray-400'>
                      CTO of Company Co.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
