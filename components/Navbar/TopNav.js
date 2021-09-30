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
      <Item
        key='/'
        onClick={e => setCurrent(e.key)}
        icon={<AppstoreOutlined />}
      >
        <Link href='/'>
          <a>BLINK</a>
        </Link>
      </Item>

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
            <Item icon={<UserOutlined />} key='/user'>
              <Link href='/user'>
                <a>Dashboard</a>
              </Link>
            </Item>
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
