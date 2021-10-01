import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { SyncOutlined } from '@ant-design/icons'
import Sidebar from '../Sidebar/UserSidebar'
axios.defaults.withCredentials = true

const UserRoute = ({ children }) => {
  // state
  const [ok, setOk] = useState(false)
  // router
  const router = useRouter()

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/current-user`
      )
      console.log('USER ROUTE => ', data)
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
        <div className='flex justify-center items-center h-screen text-7xl text-indigo-600'>
          <SyncOutlined spin />
        </div>
      ) : (
        <>
          <div className='relative min-h-screen md:flex'>
            <Sidebar />
            <div className='flex-1 md:ml-64 '>{children}</div>
          </div>
        </>
      )}
    </>
  )
}

export default UserRoute
