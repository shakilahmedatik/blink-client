import { useState, useEffect, useContext } from 'react'
import { Context } from '../../context'
import InstructorRoute from '../../components/Routes/InstructorRoute'
import { Tooltip } from 'antd'
import axios from 'axios'
import {
  DollarOutlined,
  SettingOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import { stripeCurrencyFormatter } from '../../utils/helper'

const InstructorRevenue = () => {
  const [balance, setBalance] = useState({ pending: [] })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    sendBalanceRequest()
  }, [])

  const sendBalanceRequest = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/instructor/balance`
    )
    setBalance(data)
  }

  const handlePayoutSettings = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/instructor/payout-settings`
      )
      window.location.href = data
    } catch (err) {
      setLoading(false)
      console.log(err)
      alert('Unable to access payout settings. Try later.')
    }
  }
  return (
    <InstructorRoute>
      <div className='lg:w-2/3 mx-auto my-16 py-12  bg-gray-50 rounded-xl shadow-xl'>
        <div className='p-5'>
          <h2 className='mb-2 text-2xl font-semibold uppercase tracking-tight text-gray-800 md:text-3xl sm:leading-none'>
            REVENUE REPORT <DollarOutlined className='float-right' />{' '}
          </h2>
          <p className='my-2 text-base text-gray-700 md:text-md'>
            You get paid directly from stripe to your bank account every 48 hour
          </p>
          <hr />

          <h4 className='my-2 text-lg font-body tracking-tight text-gray-800 md:text-2xl sm:leading-none'>
            Pending balance
            {balance.pending &&
              balance.pending.map((bp, i) => (
                <span key={i} className='float-right'>
                  {stripeCurrencyFormatter(bp)}
                </span>
              ))}
          </h4>
          <p className='text-gray-600'>For last 48 hours</p>
          <hr />
          <h4 className='my-2 text-lg font-body tracking-tight text-gray-800 md:text-2xl sm:leading-none'>
            Payouts{' '}
            {!loading ? (
              <Tooltip title='Setup Payout'>
                <div className='float-right text-4xl text-blue-500 p-2 pt-0 rounded-lg shadow  bg-blue-100'>
                  <SettingOutlined
                    className=' cursor-pointer'
                    onClick={handlePayoutSettings}
                  />
                </div>
              </Tooltip>
            ) : (
              <Tooltip title='Redirecting..'>
                <div className='float-right text-4xl text-blue-500 p-2 pt-0 rounded-lg shadow  bg-blue-100'>
                  <SyncOutlined className='cursor-pointer' spin />
                </div>
              </Tooltip>
            )}
          </h4>
          <p className='text-gray-600'>
            Update your stripe account details or view previous payouts.
          </p>
        </div>
      </div>
    </InstructorRoute>
  )
}

export default InstructorRevenue
