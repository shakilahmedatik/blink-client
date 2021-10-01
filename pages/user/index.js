import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context'
import UserRoute from '../../components/Routes/UserRoute'
import Hero from '../../components/Hero/Hero'

const UserIndex = () => {
  const {
    state: { user },
  } = useContext(Context)

  return (
    <UserRoute>
      <h1 className='text-center'>
        <pre>{JSON.stringify(user, null, 4)}</pre>
      </h1>
    </UserRoute>
  )
}

export default UserIndex
