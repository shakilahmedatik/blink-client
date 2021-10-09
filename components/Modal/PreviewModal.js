import React from 'react'
import ReactPlayer from 'react-player'
import { Modal } from 'antd'

const PreviewModal = ({ preview, showModal, setShowModal }) => {
  return (
    <>
      <Modal
        title='Course Preview'
        visible={showModal}
        onCancel={() => setShowModal(!showModal)}
        width={720}
        footer={null}
      >
        <ReactPlayer
          url={preview}
          playing={showModal}
          controls={true}
          width='100%'
          height='100%'
        />
      </Modal>
    </>
  )
}

export default PreviewModal
