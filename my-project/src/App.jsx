
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/ThemeContext'
import ThemeBtn from './components/ThemeBtn.jsx';
import Card from './components/Card.jsx';


function App() {

  const [themeMode,setthemeMode]=useState("dark");

  const LightMode=()=>{
    setthemeMode("light")
  }

const darkMode=()=>{
  setthemeMode("dark")
}

 useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
 },[themeMode])





  return (
<ThemeProvider value={{LightMode, darkMode, themeMode}}>
 <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
 </ThemeProvider>
  )
}

export default App
