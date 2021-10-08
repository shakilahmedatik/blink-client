import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import InstructorRoute from '../../../../components/Routes/InstructorRoute'
import axios from 'axios'
import { Avatar, Tooltip, Button, Modal, List } from 'antd'
import { EditOutlined, CheckOutlined, UploadOutlined } from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'
import AddLessonForm from '../../../../components/Forms/AddLessonForm'
import { toast } from 'react-toastify'
import Item from 'antd/lib/list/Item'

const CourseView = () => {
  const [course, setCourse] = useState({})
  // for lessons
  const [visible, setVisible] = useState(false)
  const [values, setValues] = useState({
    title: '',
    content: '',
    video: {},
  })
  const [uploading, setUploading] = useState(false)
  const [uploadButtonText, setUploadButtonText] = useState('Upload Video')
  const [progress, setProgress] = useState(0)

  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    loadCourse()
  }, [slug])

  const loadCourse = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/course/${slug}`
    )
    setCourse(data)
  }

  // FUNCTIONS FOR ADD LESSON
  const handleAddLesson = async e => {
    e.preventDefault()

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/course/lesson/${slug}/${course.instructor._id}`,
        values
      )
      setValues({ title: '', content: '', video: {} })
      setUploadButtonText('Upload video')
      setProgress(0)
      setVisible(false)
      setCourse(data)
      toast.success('Lesson Added!')
    } catch (err) {
      console.log(err)
      toast.error('Lesson Add Failed!')
    }
  }

  const handleVideo = async e => {
    try {
      const file = e.target.files[0]
      setUploadButtonText(file.name)
      setUploading(true)

      const videoData = new FormData()
      videoData.append('video', file)
      // save progress bar and send video as form data to backend
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/course/video-upload/${course.instructor._id}`,
        videoData,
        {
          onUploadProgress: e => {
            setProgress(Math.round((100 * e.loaded) / e.total))
          },
        }
      )
      // once response is received
      setValues({ ...values, video: data })
      setUploading(false)
    } catch (err) {
      console.log(err)
      setUploading(false)
      toast.error('Video upload failed')
    }
  }

  return (
    <InstructorRoute>
      {course && (
        <>
          <div className='px-5 py-6'>
            <div className='sm:flex justify-start items-center space-x-4'>
              <div className='flex justify-center sm:mb-0 mb-4'>
                <img
                  alt='profile'
                  src={course.image}
                  className='mx-auto w-60 '
                />
              </div>
              <div>
                <h2 className=' text-2xl font-semibold text-gray-700'>
                  {course.name}
                </h2>
                <span className='px-3 inline-block my-2  py-1 text-xs text-indigo-800 uppercase bg-indigo-200 rounded-full'>
                  {course.lessons && course.lessons.length} Lessons
                </span>
                <br />
                <span className='px-3 py-1 text-xs text-green-800 uppercase bg-green-200 rounded-full'>
                  {course.category}
                </span>
              </div>
              <div className='sm:flex-col flex my-4 sm:space-y-4 sm:space-x-0 space-x-3'>
                <div
                  onClick={() => router.push(`/instructor/course/edit/${slug}`)}
                  className='bg-yellow-100 p-2 rounded-lg text-yellow-500 shadow cursor-pointer'
                >
                  <Tooltip title='Edit'>
                    <EditOutlined className='text-2xl' />
                  </Tooltip>
                </div>
                <div className='bg-green-100 p-2 rounded-lg text-green-500 shadow cursor-pointer'>
                  <Tooltip title='Publish'>
                    <CheckOutlined className='text-2xl' />
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className='px-4  sm:px-0 mt-4'>
              <Button
                onClick={() => setVisible(true)}
                type='primary'
                shape='round'
                icon={<UploadOutlined />}
              >
                Add Lesson
              </Button>
            </div>
            <hr className='mt-4 border-2 bg-gray-200 lg:w-11/12' />

            <div className='flex-col my-6 '>
              <ReactMarkdown children={course.description} />

              <br />

              <Modal
                title='+ Add Lesson'
                centered
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
              >
                <AddLessonForm
                  values={values}
                  setValues={setValues}
                  handleAddLesson={handleAddLesson}
                  uploading={uploading}
                  uploadButtonText={uploadButtonText}
                  handleVideo={handleVideo}
                  progress={progress}
                />
              </Modal>

              <div className='lesson-list'>
                <h4>
                  Lessons:{' '}
                  <span className='px-3 inline-block my-2  py-1 text-xs text-indigo-800 uppercase bg-indigo-200 rounded-full'>
                    {course && course.lessons && course.lessons.length}
                  </span>
                </h4>
                <List
                  itemLayout='horizontal'
                  dataSource={course && course.lessons}
                  renderItem={(item, index) => (
                    <Item>
                      <Item.Meta
                        avatar={<Avatar>{index + 1}</Avatar>}
                        title={item.title}
                      ></Item.Meta>
                    </Item>
                  )}
                ></List>
              </div>
            </div>
          </div>
        </>
      )}
    </InstructorRoute>
  )
}

export default CourseView