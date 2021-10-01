import { useState, useEffect } from 'react'
import axios from 'axios'
import InstructorRoute from '../../../components/routes/InstructorRoute'
import CourseCreateForm from '../../../components/Forms/CourseCreateForm'

const CreateCourse = () => {
  // state
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '9.99',
    uploading: false,
    paid: true,
    category: 'Web Development',
    loading: false,
    imagePreview: '',
  })

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleImage = () => {
    //
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <InstructorRoute>
      <div className=' pb-3'>
        <CourseCreateForm
          handleSubmit={handleSubmit}
          handleImage={handleImage}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
        />
      </div>
      <pre>{JSON.stringify(values, null, 4)}</pre>
    </InstructorRoute>
  )
}

export default CreateCourse
