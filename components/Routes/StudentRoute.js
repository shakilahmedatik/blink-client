import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { SyncOutlined } from '@ant-design/icons'

const StudentRoute = ({ children, showSidebar = true }) => {
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
        <div>{children}</div>
      )}
    </>
  )
}

export default StudentRoute
