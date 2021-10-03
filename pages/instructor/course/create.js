import { useState, useEffect } from 'react'
import axios from 'axios'
import InstructorRoute from '../../../components/Routes/InstructorRoute'
import CourseCreateForm from '../../../components/Forms/CourseCreateForm'
import Resizer from 'react-image-file-resizer'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

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
    image: '',
  })
  const [preview, setPreview] = useState('')
  const [uploadButtonText, setUploadButtonText] = useState('UPLOAD IMAGE')
  // const [image, setImage] = useState('')

  // router
  const router = useRouter()

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleImage = async e => {
    let file = e.target.files[0]
    setPreview(window.URL.createObjectURL(file))
    setUploadButtonText(file.name)
    setValues({ ...values, loading: true })

    // prepare the image
    const resizeFile = file =>
      new Promise(resolve => {
        Resizer.imageFileResizer(
          file,
          720,
          500,
          'JPEG',
          100,
          0,
          uri => {
            resolve(uri)
          },
          'base64'
        )
      })
    const image = await resizeFile(file)
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '')

    try {
      // Get Image URL
      let { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/course/upload-image`,
        {
          image: base64Data,
        }
      )
      console.log(data)
      // set image in the state
      setValues({ ...values, image: data.display_url, loading: false })
    } catch (err) {
      console.log(err)
      setValues({ ...values, loading: false })
      toast.error('Image upload failed. Try again.')
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      console.log(values)
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/course`,
        {
          ...values,
        }
      )
      console.log(data)
      toast.success('Great! Now you can start adding lessons')
      router.push('/instructor')
    } catch (err) {
      toast.error(err.response.data)
    }
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
          preview={preview}
          uploadButtonText={uploadButtonText}
        />
      </div>
    </InstructorRoute>
  )
}

export default CreateCourse
