import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let[prevcounter,setcounter]=useState(15)

const addvalue=()=>{
  // console.log("clicked",counter)
  // counter=counter+1;
  // if(counter <= 20){
  // setcounter(counter)
  // }
    setcounter(prevcounter=>prevcounter + 1)
    setcounter(prevcounter=>prevcounter + 1)
    setcounter(prevcounter=>prevcounter + 1)
    setcounter(prevcounter=>prevcounter + 1)
    setcounter(prevcounter=>prevcounter + 1)
    


}
const removevalue=()=>{
  console.log("clicked",counter)
  //counter=counter-1;
//   if(counter > 0 ){
//   setcounter(counter-1)
// }
}
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter Value:{prevcounter}</h2>
     <button onClick={addvalue}>ADD value</button>
     <br/>
     <br/>
     <button onClick={removevalue}>Remove value</button>
      <p>footer:{prevcounter}</p>
    </>
  )
}

export default App
