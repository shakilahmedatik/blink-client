import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { SyncOutlined } from '@ant-design/icons'

const UserRoute = ({ children }) => {
  // state
  const [ok, setOk] = useState(false)
  // router
  const router = useRouter()

  useEffect(() => {
    fetchUser()
  }, [])

  // const fetchUser = async () => {
  //   try {
  //     const { data } = await fetch(
  //       `${process.env.NEXT_PUBLIC_API}/current-user`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //         credentials: 'include',
  //       }
  //     )
  //     console.log(data)
  //     if (data.ok) setOk(true)
  //   } catch (err) {
  //     console.log(err)
  //     setOk(false)
  //     router.push('/login')
  //   }
  // }

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/current-user`,
        { withCredentials: true }
      )
      //   console.log(data);
      if (data.ok) setOk(true)
    } catch (err) {
      console.log(err)
      setOk(false)
      router.push('/login')
    }
  }

  return (
    <>
      {!ok ? (
        <div className='flex justify-center p-5 text-7xl text-indigo-600'>
          <SyncOutlined spin />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default UserRoute
