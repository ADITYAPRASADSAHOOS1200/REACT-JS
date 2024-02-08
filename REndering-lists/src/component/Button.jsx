import React from 'react';
import { useState } from 'react'; 
import "./Profile.css"

export default function Button({count,onClick,Click}) {
  
  return (
    <div className='count'>
        <h1>count={count}</h1>
      <button onClick={onClick}>increment +</button>
      <button onClick={Click}>decrement -</button>
    </div>
  )
}
