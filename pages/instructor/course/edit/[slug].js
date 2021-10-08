import { useState, useEffect } from 'react'
import axios from 'axios'
import InstructorRoute from '../../../../components/Routes/InstructorRoute'
import CourseCreateForm from '../../../../components/Forms/CourseCreateForm'
import Resizer from 'react-image-file-resizer'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { Avatar, List, Tooltip, Modal } from 'antd'
const { Item } = List
import { DeleteOutlined } from '@ant-design/icons'
import UpdateLessonForm from '../../../../components/Forms/UpdateLessonForm'

const CourseEdit = () => {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState({})
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
    lessons: [],
  })
  const [preview, setPreview] = useState('')
  const [uploadButtonText, setUploadButtonText] = useState('UPLOAD IMAGE')

  // state for lessons update
  const [uploadVideoButtonText, setUploadVideoButtonText] =
    useState('Upload Video')
  const [progress, setProgress] = useState(0)
  const [uploading, setUploading] = useState(false)

  // router
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    loadCourse()
  }, [slug])

  const loadCourse = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/course/${slug}`
    )
    if (data) setValues(data)
  }

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
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API}/course/${slug}`,
        {
          ...values,
        }
      )
      toast.success('Great! Course Updated')
      router.push('/instructor')
    } catch (err) {
      toast.error(err.response.data)
    }
  }

  const handleDrag = (e, index) => {
    e.dataTransfer.setData('itemIndex', index)
  }

  const handleDrop = async (e, index) => {
    const movingItemIndex = e.dataTransfer.getData('itemIndex')
    const targetItemIndex = index
    let allLessons = values.lessons

    let movingItem = allLessons[movingItemIndex] // clicked/dragged item to re-order
    allLessons.splice(movingItemIndex, 1) // remove 1 item from the given index
    allLessons.splice(targetItemIndex, 0, movingItem) // push item after target item index

    setValues({ ...values, lessons: [...allLessons] })
    // save the new lessons order in db
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_API}/course/${slug}`,
      {
        ...values,
      }
    )
    toast.success('Lessons Order Updated')
  }

  const handleDelete = async index => {
    const answer = window.confirm('Are you sure you want to delete?')
    if (!answer) return
    let allLessons = values.lessons
    const removed = allLessons.splice(index, 1)
    setValues({ ...values, lessons: allLessons })
    // send request to server
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_API}/course/${slug}/${removed[0]._id}`
    )
    toast.success('Lessons deleted successfully')
  }

  /**
   * lesson update functions
   */

  const handleVideo = async e => {
    // remove previous
    if (current.video && current.video.secure_url) {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/course/remove-video/${values._id}`,
        current.video
      )
    }
    // upload
    const file = e.target.files[0]
    setUploadButtonText(file.name)
    setUploading(true)
    // send video as form data
    const videoData = new FormData()
    videoData.append('video', file)
    videoData.append('courseId', values._id)
    // save progress bar and send video as form data to backend
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/course/video-upload/${values.instructor._id}`,
      videoData,
      {
        onUploadProgress: e =>
          setProgress(Math.round((100 * e.loaded) / e.total)),
      }
    )
    // once response is received
    setCurrent({ ...current, video: data })
    setUploading(false)
  }

  const handleUpdateLesson = async e => {
    e.preventDefault()
    let { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_API}/course/lesson/${slug}/${current._id}`,
      current
    )
    setUploadVideoButtonText('Upload video')
    setProgress(0)
    setVisible(false)
    // update lessons
    if (data.ok) {
      let arr = values.lessons
      const index = arr.findIndex(el => el._id === current._id)
      arr[index] = current
      setValues({ ...values, lessons: arr })
      toast.success('Lesson updated')
    }
  }

  return (
    <InstructorRoute>
      <div>
        <CourseCreateForm
          handleSubmit={handleSubmit}
          handleImage={handleImage}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
          preview={preview}
          uploadButtonText={uploadButtonText}
          editPage={true}
        />
      </div>
      <hr className='mt-4 border-2 bg-gray-200 mx-auto w-11/12' />

      <div className='m-8 my-4 lg:ml-16'>
        <h4 className='font-bold text-gray-700 text-lg'>
          Lessons:{' '}
          <span className='px-3 inline-block my-2  py-1 text-xs text-indigo-800 uppercase bg-indigo-200 rounded-full'>
            {values && values.lessons && values.lessons.length}
          </span>
        </h4>
        <List
          itemLayout='horizontal'
          onDragOver={e => e.preventDefault()}
          dataSource={values && values.lessons}
          renderItem={(item, index) => (
            <Item
              draggable
              onDragStart={e => handleDrag(e, index)}
              onDrop={e => handleDrop(e, index)}
            >
              <div
                onClick={() => handleDelete(index)}
                className='bg-red-100 p-2 mx-2 rounded-lg text-red-500 shadow cursor-pointer'
              >
                <Tooltip title='Delete'>
                  <DeleteOutlined className='text-lg' />
                </Tooltip>
              </div>
              <Item.Meta
                onClick={() => {
                  setVisible(true)
                  setCurrent(item)
                }}
                className='cursor-pointer'
                avatar={<Avatar>{index + 1}</Avatar>}
                title={item.title}
              ></Item.Meta>
            </Item>
          )}
        ></List>
      </div>

      <Modal
        title='Update lesson'
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <UpdateLessonForm
          current={current}
          setCurrent={setCurrent}
          handleVideo={handleVideo}
          handleUpdateLesson={handleUpdateLesson}
          uploadVideoButtonText={uploadVideoButtonText}
          progress={progress}
          uploading={uploading}
        />
      </Modal>
    </InstructorRoute>
  )
}

export default CourseEdit
