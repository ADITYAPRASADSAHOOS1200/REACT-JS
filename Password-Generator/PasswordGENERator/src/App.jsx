import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {

    const [Length, setLength] = useState(8);
    const [Numbers,setNumbers] =useState(false);
    const [Characters,setCharacters]=useState(false);
    const [password, setpassword] = useState('');

    const PasSref=useRef(null)

  const PasswordGenerator=useCallback(()=>{
   let pass ="";
   let str ="ABCDEFGHIJKLMNOPQRTSUvWXYZ";
   if(Numbers)  str += "0123456789";
   if(Characters) str+="#$%^&()!@"
   
   for (let i = 0; i <= Length; i++) {
    let char=Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char)

   }
   setpassword(pass)
  },[Length,Numbers,Characters,setpassword])

  useEffect(()=>{
     PasswordGenerator();
  },[Length,Numbers,Characters,PasswordGenerator])


 const CopyToclipBoard =useCallback(()=>{ 
    PasSref.current?.select()
    PasSref.current?.setSelectionRange()
    window.navigator.clipboard.writeText(password)
 },[password])

  return (
    <div className='h-[150px] w-[600px] bg-[#b3e864]  m-auto mt-10  rounded-md'>
    <h1 className='text-2xl text-ceneter font-semibold text-[#b87336] text-center'>Password Generator</h1>
    <div className='mt-[10px] flex ' >
    <input 
    type="text" 
    placeholder="Enter Your PassWord" 
    className=' outline-none border-none bg-slate-400 ml-10  placeholder:text-black w-[80%] px-10'
    value={password}
    ref={PasSref}
     />
    <button 
     onClick={ CopyToclipBoard }
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded">
        Copy
    </button>
     </div>

     <div className='mt-[20px]  ml-[40px] flex  align-middle gap-5'>
      <label htmlFor="slider" className='flex align-middle  gap-3 text-xl font-semibold text-orange-500'> 
     <input type="range" 
       value={Length}
      name="slider"  
      id="slider" 
      min={6}
      max={25}
      onChange={e => setLength(e.target.value)}
      className='cursor-pointer'
     />
     Length({Length})
     </label>

      <label htmlFor="" className='text-xl font-semibold text-orange-500'>
        <input 
        type="checkbox" 
         defaultChecked={Numbers}
         onChange={()=>{
            setNumbers( (prev) => !prev)
         }}
      
         />
        Numbers
      </label>

      <label htmlFor="" className='text-xl font-semibold text-orange-500'>
        <input 
        type="checkbox" 
         defaultChecked={Characters}
         onChange={()=>{
            setCharacters( (prev) => !prev)
         }}
      
         />
        Characters
      </label>
     </div>
    </div>
  )
}

export default App
