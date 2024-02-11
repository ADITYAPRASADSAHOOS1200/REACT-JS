import React, { useState } from 'react'

export default function MessageSent() {

  const[Input,SetInput]=useState('')
  const [isSent, setIsSent] = useState(false);


     if(isSent){
     return <h2>Thank you</h2>
     }  else{
  

  return (
    <div>
    <form onSubmit={
  e=>{e.preventDefault()
      setIsSent(true)
      alert(`Submitting.... ${Input}`)
    }}
    >
     <textarea
       value={Input}
       onChange={(e)=>SetInput(e.target.value)}
       placeholder="hi"

     />
    <button type='submit'>Submit</button>
    </form>  
    </div>
  )
     }
}
