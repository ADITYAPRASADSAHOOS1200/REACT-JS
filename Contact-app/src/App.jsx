import { useEffect, useState } from "react"
import React from "react"
import Header from "./Components/Header.jsx"
import Addcontact from "./Components/Addcontact.jsx";
import ContactCard from "./Components/ContactCard.jsx";
import Contactli from "./Components/Contactli.jsx";
import './App.css'

function App() {
  const Local_Storage_key="contact"
 
  const [contacts,SetContacts]=useState(
    JSON.parse(localStorage.getItem(Local_Storage_key)) ?? []
  );

  const addcontactHandler=(contact)=>{
      
    SetContacts([...contacts,contact])
  }


 

  useEffect(()=>{
    localStorage.setItem(Local_Storage_key,JSON.stringify(contacts))
  },[contacts])


  return (
    <div className='ui container'>
     <Header/>
     <Addcontact  addcontactHandler={addcontactHandler}/>
     <Contactli contact={contacts}/>
    </div>
  )

export default App
