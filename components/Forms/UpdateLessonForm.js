import { Progress, Switch } from 'antd'
import ReactPlayer from 'react-player'

const UpdateLessonForm = ({
  current,
  setCurrent,
  handleUpdateLesson,
  uploading,
  uploadVideoButtonText,
  handleVideo,
  progress,
}) => {
  return (
    <form className='space-y-2' onSubmit={handleUpdateLesson}>
      {/**{JSON.stringify(current)} */}
      <div className=' text-sm'>
        <input
          className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
          onChange={e => setCurrent({ ...current, title: e.target.value })}
          value={current.title}
          name='name'
          id='name'
          type='text'
          autoFocus
          required
        />
      </div>
      <div className=' text-sm'>
        <textarea
          className='block rounded-md focus:indigo-300 w-full h-20 px-4 py-3 text-gray-800 bg-indigo-50 border border-indigo-300 '
          onChange={e => setCurrent({ ...current, content: e.target.value })}
          value={current.content}
        ></textarea>
      </div>
      <div className=''>
        {!uploading && current.video && current.video.secure_url && (
          <div className='pt-2 flex justify-center'>
            <ReactPlayer
              url={current.video.secure_url}
              width='410px'
              height='240px'
              controls
            />
          </div>
        )}
        <label className='p-3 block mt-2 text-center rounded-md cursor-pointer text-gray-500 font-bold border  border-green-400 hover:bg-green-400 hover:border-white hover:text-white'>
          {uploadVideoButtonText}
          <input type='file' onChange={handleVideo} accept='video/*' hidden />
        </label>
      </div>
      {progress > 0 && (
        <div className='flex justify-center py-2'>
          <Progress percent={progress} steps={10} />
        </div>
      )}
      <div className='flex py-3 justify-between items-center'>
        <span className='font-bold text-gray-600 uppercase'>Free Preview</span>
        <Switch
          className='float-right'
          disabled={uploading}
          checked={current.free_preview ? true : false}
          name='fee_preview'
          onChange={v => setCurrent({ ...current, free_preview: v })}
        />
      </div>
      <button
        type='submit'
        className='block w-full p-3 text-center rounded-lg text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400'
        disabled={uploading}
      >
        {uploading ? 'Saving...' : 'Save'}
      </button>
    </form>
  )
}

export default UpdateLessonForm
