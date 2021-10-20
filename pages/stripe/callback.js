import { useContext, useEffect } from 'react'
import { Context } from '../../context'
import { SyncOutlined } from '@ant-design/icons'
import axios from 'axios'
axios.defaults.withCredentials = true

const StripeCallback = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context)

  useEffect(() => {
    if (user) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/get-account-status`)
        .then(res => {
          // console.log(res);
          dispatch({
            type: 'LOGIN',
            payload: res.data,
          })
          window.localStorage.setItem('user', JSON.stringify(res.data))
          window.location.href = '/instructor'
        })
    }
  }, [user])

  return (
    <div className='flex justify-center items-center h-screen text-7xl text-blue-600'>
      <SyncOutlined spin />
    </div>
  )
}

export default StripeCallback
