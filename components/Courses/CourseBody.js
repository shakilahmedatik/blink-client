import React, { useState } from 'react'
import CourseCard from '../Cards/CourseCard'

const CourseBody = ({ allCourses }) => {
  const [filteredCourses, setFilteredCourses] = useState(allCourses)

  const resetFilter = () => {
    setFilteredCourses(allCourses)
  }
  const handleFilter = e => {
    const filtered = allCourses.filter(
      course => course.category === e.target.innerText
    )
    setFilteredCourses(filtered)
  }
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container px-8 py-8 lg:py-12 lg:px-16 mx-auto'>
        <div className='lg:flex lg:-mx-2'>
          <div className='space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4'>
            <h3 className='block uppercase font-medium text-gray-500 dark:text-gray-300'>
              Course Categories
            </h3>
            <hr />
            <h3
              onClick={() => resetFilter()}
              className='block font-medium  text-gray-500 cursor-pointer dark:text-gray-300 hover:text-blue-600'
            >
              All Courses
            </h3>
            <h3
              onClick={handleFilter}
              className='block font-medium text-gray-500 cursor-pointer dark:text-gray-300 hover:text-blue-600'
            >
              Web Development
            </h3>
            <h3
              onClick={handleFilter}
              className='block font-medium text-gray-500 cursor-pointer dark:text-gray-300 hover:text-blue-600'
            >
              Mobile App Development
            </h3>
            <h3
              onClick={handleFilter}
              className='block font-medium text-gray-500 cursor-pointer dark:text-blue-500 hover:text-blue-600'
            >
              Graphics Design
            </h3>
            <h3
              onClick={handleFilter}
              className='block font-medium text-gray-500 cursor-pointer dark:text-gray-300 hover:text-blue-600'
            >
              Digital Marketing
            </h3>
          </div>

          <div className='mt-6 lg:mt-0 lg:px-2 lg:w-4/5 '>
            <div className='flex items-center justify-between text-sm tracking-widest uppercase '>
              <p className='text-gray-500 mb-0 dark:text-gray-300'>
                {filteredCourses?.length} Courses
              </p>
              <div className='flex items-center'>
                <p className='text-gray-500 mb-0 dark:text-gray-300'>Sort</p>
                <select className='font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none'>
                  <option value='#'>Recommended</option>
                  <option value='#'>Popular</option>
                  <option value='#'>Price</option>
                </select>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3'>
              {filteredCourses.map(course => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseBody
