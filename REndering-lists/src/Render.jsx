
import React from 'react'
import Fancy from './ui tree/Fancy'
import Inspiration from './ui tree/Inspiration'
import CopyRight from './ui tree/CopyRight'



export default function Render() {
  return (
    <div className='card'>
    <Fancy title text="Get Inspired App" />
    <Inspiration>
    <CopyRight year={2004}/>
    </Inspiration>
    </div>
  )
}
