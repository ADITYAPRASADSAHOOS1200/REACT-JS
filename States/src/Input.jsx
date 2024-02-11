import React, { useState } from 'react'


export default function Input() {

    const[FirstName,SetFirstname]=useState('');
    const[LastName,SetLastName]=useState('')

   
    const Handle=()=>{
        SetFirstname('')
        SetLastName('')
      }

  return (

    <div>
        <input type="text" 
         value={FirstName}
         onChange={e=>SetFirstname(e.target.value)}
         placeholder='LastName'
         />

        <input type="text" 
         value={LastName}
         placeholder='FirstName'
         onChange={e=>SetLastName(e.target.value)}
         />
         <h3>hi {FirstName}{LastName}</h3>

        <button onClick={Handle}>Reset</button>
    </div>
  )
  }
