import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='text-center w-full bg-slate-500 text-white'>
      user: {userid}
    </div>
  )
}

export default User
