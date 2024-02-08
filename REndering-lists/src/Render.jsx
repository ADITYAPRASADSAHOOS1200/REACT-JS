
import React from 'react'
import Fancytext from './ui tree/fancytext'
import Inspiration from './ui tree/Inspiration'
import CopyRight from './ui tree/CopyRight'



export default function Render() {
  return (
    <div className='card'>
    <Fancytext title text="Get Inspired App" />
    <Inspiration>
    <CopyRight year={2004}/>
    </Inspiration>
    </div>
  )
}
