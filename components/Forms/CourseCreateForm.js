import React, { useEffect, useState } from 'react'
import { Select, Button } from 'antd'

const { Option } = Select

const CourseCreateForm = ({
  handleSubmit,
  handleImage,
  handleChange,
  values,
  setValues,
}) => {
  const children = []
  for (let i = 9.99; i <= 100.99; i++) {
    children.push(<Option key={i.toFixed(2)}>${i.toFixed(2)}</Option>)
  }
  return (
    <div className='flex justify-center py-16'>
      <div className='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
        <h1 className='text-3xl font-mono text-gray-500 text-center'>
          CREATE NEW COURSE
        </h1>
        <form
          onSubmit={handleSubmit}
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-1 text-sm'>
            <label htmlFor='name' className='block text-gray-600'>
              Name
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
              value={values.name}
              onChange={handleChange}
              name='name'
              id='name'
              type='text'
              placeholder='Name'
              required
            />
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='description' className='block text-gray-600'>
              Description
            </label>

            <textarea
              id='description'
              className='block rounded-md focus:indigo-300 w-full h-20 px-4 py-3 text-gray-800 bg-indigo-50 border border-indigo-300 '
              onChange={handleChange}
              value={values.description}
              name='description'
            ></textarea>
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='type' className='block text-gray-600'>
              Course Type
            </label>
            <Select
              id='type'
              className='w-full'
              size='large'
              value={values.paid}
              onChange={v => setValues({ ...values, paid: !values.paid })}
            >
              <Option value={true}>Paid</Option>
              <Option value={false}>Free</Option>
            </Select>
          </div>

          {values.paid && (
            <div>
              <Select
                defaultValue='$9.99'
                style={{ width: '100%' }}
                onChange={v => setValues({ ...values, price: v })}
                tokenSeparators={[,]}
                size='large'
              >
                {children}
              </Select>
            </div>
          )}

          <div className='space-y-1 text-sm'>
            <label htmlFor='category' className='block text-gray-600'>
              Choose Category
            </label>
            <Select
              id='category'
              className='w-full'
              size='large'
              value={values.category}
              onChange={c => setValues({ ...values, category: c })}
            >
              <Option value={'Web Development'}>Web Development</Option>
              <Option value={'Mobile App Development'}>
                Mobile App Development
              </Option>
              <Option value={'Digital Marketing'}>Digital Marketing</Option>
              <Option value={'Graphics Design'}>Graphics Design</Option>
            </Select>
          </div>

          <div>
            <label className='p-3 text-center rounded-md cursor-pointer text-gray-500 font-bold border  border-green-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:border-white hover:text-white'>
              {values.loading ? 'UPLOADING...' : 'UPLOAD IMAGE'}
              <input
                type='file'
                name='image'
                onChange={handleImage}
                accept='image/*'
                hidden
              />
            </label>
          </div>

          <button
            type='submit'
            className='block w-full p-3 text-center rounded-sm text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400'
            disabled={values.loading || values.uploading}
          >
            {values.loading ? 'Saving...' : 'Save & Continue'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CourseCreateForm