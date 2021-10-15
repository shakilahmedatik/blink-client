import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import TopNav from '../../components/Navbar/TopNav'
import SingleCourseHeader from '../../components/Cards/SingleCourseHeader'
import PreviewModal from '../../components/Modal/PreviewModal'
import SingleCourseLessons from '../../components/Cards/SingleCourseLessons'
import { Context } from '../../context'
import { toast } from 'react-toastify'
axios.defaults.withCredentials = true

export async function getServerSideProps({ query }) {
  const { data } = await axios.get(`${process.env.API}/course/${query.slug}`)
  return {
    props: { course: data },
  }
}

const SingleCourse = ({ course }) => {
  const [showModal, setShowModal] = useState(false)
  const [preview, setPreview] = useState('')
  const [loading, setLoading] = useState(false)
  const [enrolled, setEnrolled] = useState({})
  // Context
  const {
    state: { user },
  } = useContext(Context)

  useEffect(() => {
    if (user && course) checkEnrollment()
  }, [user, course])

  const checkEnrollment = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/check-enrollment/${course._id}`
    )
    console.log('Enrollment---->', data)
    setEnrolled(data)
  }

  const router = useRouter()

  const handlePaidEnrollment = async e => {
    e.preventDefault()
    try {
      // Validation
      if (!user) router.push('/login')
      if (enrolled.status)
        return router.push(`/user/course/${enrolled.course.slug}`)
      setLoading(true)
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/paid-enrollment/${course._id}`
      )
      toast.success(data.message)
      setLoading(false)
      router.push(`/user/course/${data.course.slug}`)
    } catch (err) {
      toast.error('Enrollment Failed. Try Again.')
      console.log(err)
      setLoading(false)
    }
  }

  const handleFreeEnrollment = async e => {
    e.preventDefault()
    try {
      // Validation
      if (!user) router.push('/login')
      if (enrolled.status)
        return router.push(`/user/course/${enrolled.course.slug}`)
      setLoading(true)
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/free-enrollment/${course._id}`
      )
      toast.success(data.message)
      setLoading(false)
      router.push(`/user/course/${data.course.slug}`)
    } catch (err) {
      toast.error('Enrollment Failed. Try Again.')
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <div>
      <TopNav />
      <SingleCourseHeader
        course={course}
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview}
        loading={loading}
        user={user}
        handlePaidEnrollment={handlePaidEnrollment}
        handleFreeEnrollment={handleFreeEnrollment}
        enrolled={enrolled}
        setEnrolled={setEnrolled}
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
