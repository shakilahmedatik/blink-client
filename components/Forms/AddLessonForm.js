import { Progress } from 'antd'
const AddLessonForm = ({
  values,
  setValues,
  handleAddLesson,
  uploading,
  uploadButtonText,
  handleVideo,
  progress,
}) => {
  return (
    <form className='space-y-2' onSubmit={handleAddLesson}>
      <div className=' text-sm'>
        <input
          className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
          onChange={e => setValues({ ...values, title: e.target.value })}
          value={values.title}
          name='name'
          id='name'
          type='text'
          placeholder='Lesson Title'
          autoFocus
          required
        />
      </div>

      <div className=' text-sm'>
        <textarea
          className='block rounded-md focus:indigo-300 w-full h-20 px-4 py-3 text-gray-800 bg-indigo-50 border border-indigo-300 '
          onChange={e => setValues({ ...values, content: e.target.value })}
          value={values.content}
          placeholder='Content'
        ></textarea>
      </div>

      <div className=''>
        <label className='p-3 block mt-2 text-center rounded-md cursor-pointer text-gray-500 font-bold border  border-green-400 hover:bg-green-400 hover:border-white hover:text-white'>
          {uploadButtonText}
          <input type='file' onChange={handleVideo} accept='video/*' hidden />
        </label>
      </div>

      {progress > 0 && (
        <div className='flex justify-center py-2'>
          <Progress percent={progress} steps={10} />
        </div>
      )}

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

export default AddLessonForm
