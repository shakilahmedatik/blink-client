import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import TopNav from '../../components/Navbar/TopNav'
import SingleCourseHeader from '../../components/Cards/SingleCourseHeader'
import PreviewModal from '../../components/Modal/PreviewModal'
import SingleCourseLessons from '../../components/Cards/SingleCourseLessons'

export async function getServerSideProps({ query }) {
  const { data } = await axios.get(`${process.env.API}/course/${query.slug}`)
  return {
    props: { course: data },
  }
}

const SingleCourse = ({ course }) => {
  const [showModal, setShowModal] = useState(false)
  const [preview, setPreview] = useState('')

  const router = useRouter()

  return (
    <div>
      <TopNav />
      <SingleCourseHeader
        course={course}
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview}
      />
      <PreviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
      />
      {course.lessons && (
        <SingleCourseLessons
          lessons={course.lessons}
          setPreview={setPreview}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  )
}
export default SingleCourse
