import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const [color,setColor]=useState(0)
  const handleClick=()=>{
     setCount(count+1)
  }

//case 1: it will render Everytime
//  useEffect(()=>{
//   alert("i will change everytime")
//  })
// //case 2:it will change only one time 
//  useEffect(()=>{
//   alert("i will change one time")
//  },[])

// //case #:it will change only when count changes

// useEffect (()=>{
//   alert("count was changed")

// },[count])


useEffect(()=>{
  alert("color was change")
  setColor(color+1);
},[count])


  return (
    <>
    <h1>{count}</h1>
    <h2>{color}</h2>

    <button onClick={handleClick}>click</button>
    </>
  )
}

export default App


