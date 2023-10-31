import { useState } from 'react'

import './App.css'

 function App() {

  let[counter,setCounter]=useState(0)

  const addvalue=()=>{
    counter=counter+1
     
    setCounter(counter);
  }
  const removevalue=()=>{
   counter=counter+1
    setCounter(counter)
  }

return(
<>
    <div className='main-sec'>
      <h1 className='header'>Counter-app</h1>
       <h2>Vlaue:{counter}</h2>
       <div className='button'>
        <button className='btn-1' onClick={addvalue}>INC</button>
        <button className='btn-1' onClick={removevalue}>DEC</button>
       </div>
    </div>
</>
)
}

export default App

