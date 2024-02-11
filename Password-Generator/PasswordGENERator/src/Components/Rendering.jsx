import React, { useState } from 'react'

export default function Rendering() {

    const [Form, setForm] = useState({name:"",phone:""})

    

    const submit=()=>{
     alert(`Submiitting.....${Form.name}`+`${Form.phone} `)
   
    }
  

  return (
    <div>
    <form onChange={e=>e.preventDefault()}>
    <div>
      <input 
      type="text" 
      name='name'
      value={Form.name?Form.name:""}
      onChange={(e)=>{
        setForm(
            {...Form,[e.target.name]:e.target.value},
              console.log(Form)
            )}}
      />
    </div>
    <div  className='mt-5'>
      <input 
      type="text"
      name='phone'
      value={Form.phone ? Form.phone:""}
      onChange={(e)=>{
        setForm(
            {...Form,[e.target.name]:e.target.value},
              console.log(Form)
            )}}
      />
      <button className='ml-4 p-2 bg-orange-500 rounded-lg text-white  font semibold' onClick={submit}>Submit</button>
      </div>  
      </form>
    </div>
  )
}
