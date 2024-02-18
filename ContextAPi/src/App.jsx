import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContext.jsx'
import Login from './Component/Login.jsx'
import Profile from './Component/Profile.jsx'

function App(){

  return (
    <UserContextProvider>
     <h1>Aditya you have to do it and discipline is important</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
