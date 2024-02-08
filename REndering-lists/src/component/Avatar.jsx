
import React from 'react'
import  Utils from "./Utils.jsx";

export default function Avatar({size,person}) {
  return (
    <div>
      <img 
      src={person} 
      alt={person.name}
      width={size}
      height={size}
       />
    </div>
  )
}
