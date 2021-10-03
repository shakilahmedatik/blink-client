import { useState, useEffect, useContext } from 'react'
import { Menu } from 'antd'
import Link from 'next/link'
import {
  AppstoreOutlined,
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  UserOutlined,
  TeamOutlined,
  CarryOutOutlined,
} from '@ant-design/icons'
import { Context } from '../../context'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const { Item, SubMenu, ItemGroup } = Menu

const TopNav = () => {
  const [current, setCurrent] = useState('')

  const { state, dispatch } = useContext(Context)
  const { user } = state

  const router = useRouter()

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])

  const logout = async () => {
    dispatch({ type: 'LOGOUT' })
    window.localStorage.removeItem('user')
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/logout`)
    toast.warning(data.message)
    router.push('/login')
  }

  return (
    <Menu mode='horizontal' selectedKeys={[current]}>
      <Item key='/' onClick={e => setCurrent(e.key)}>
        <Link href='/'>
          <a>
            <div className='flex justify-center align-center pt-1 pr-1'>
              <img src='/images/logo.svg' className='w-10 h-10' alt='' /> BLINK
            </div>
          </a>
        </Link>
      </Item>

      {user !== null &&
        (user.role && user.role.includes('Instructor') ? (
          <Item
            key='/instructor/course/create'
            onClick={e => setCurrent(e.key)}
            icon={<CarryOutOutlined />}
          >
            <Link href='/instructor/course/create'>
              <a>Create Course</a>
            </Link>
          </Item>
        ) : (
          <Item
            key='/user/become-instructor'
            onClick={e => setCurrent(e.key)}
            icon={<TeamOutlined />}
          >
            <Link href='/user/become-instructor'>
              <a>Become Instructor</a>
            </Link>
          </Item>
        ))}

      {user === null && (
        <>
          <Item
            key='/login'
            onClick={e => setCurrent(e.key)}
            icon={<LoginOutlined />}
            className='float-right'
          >
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </Item>

          <Item
            key='/register'
            onClick={e => setCurrent(e.key)}
            icon={<UserAddOutlined />}
            className='float-right'
          >
            <Link href='/register'>
              <a>Register</a>
            </Link>
          </Item>
        </>
      )}

      {user !== null && (
        <SubMenu
          icon={<CoffeeOutlined />}
          title={user && user.name}
          className='float-right'
        >
          <ItemGroup>
            {user && user.role && !user.role.includes('Instructor') ? (
              <Item
                icon={<UserOutlined />}
                onClick={e => setCurrent(e.key)}
                key='/user'
              >
                <Link href='/user'>
                  <a>Dashboard</a>
                </Link>
              </Item>
            ) : (
              <Item
                icon={<UserOutlined />}
                onClick={e => setCurrent(e.key)}
                key='/instructor'
              >
                <Link href='/instructor'>
                  <a>Dashboard</a>
                </Link>
              </Item>
            )}
            <Item icon={<LogoutOutlined />} onClick={logout}>
              Logout
            </Item>
          </ItemGroup>
        </SubMenu>
      )}
    </Menu>
  )
}

export default TopNav
