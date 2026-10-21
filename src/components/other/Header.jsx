
import React from 'react'

const Header = ({ data }) => {
  console.log(data)

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-white text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>
          {data.firstName} 😊
        </span>
      </h1>

      <button className='text-white text-lg font-medium bg-red-600 px-5 py-2 rounded-sm'>
        Logout
      </button>
    </div>
  )
}

export default Header
