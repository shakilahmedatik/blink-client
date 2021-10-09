import React from 'react'
import { List, Avatar, Tooltip } from 'antd'
const { Item } = List
import { PlayCircleOutlined } from '@ant-design/icons'

const SingleCourseLessons = ({
  lessons,
  setPreview,
  showModal,
  setShowModal,
}) => {
  return (
    <div className='container mx-auto px-8 py-8'>
      <div>
        {lessons && (
          <p className='px-3 inline-block my-2  py-1 text-xs text-indigo-800 uppercase bg-indigo-200 rounded-full'>
            Total Lesson: {lessons.length}
          </p>
        )}
      </div>
      <hr />
      <List
        itemLayout='horizontal'
        dataSource={lessons}
        renderItem={(item, index) => (
          <Item>
            <Item.Meta
              avatar={<Avatar>{index + 1}</Avatar>}
              title={item.title}
            />

            {item.video && item.video !== null && item.free_preview && (
              <div
                onClick={() => {
                  setPreview(item.video.secure_url)
                  setShowModal(!showModal)
                }}
                className='bg-blue-100 py-2 px-4 rounded-lg text-blue-500 shadow cursor-pointer'
              >
                <Tooltip title='Free Preview'>
                  <PlayCircleOutlined className='text-xl' />
                </Tooltip>
              </div>
            )}
          </Item>
        )}
      />
    </div>
  )
}

export default SingleCourseLessons
