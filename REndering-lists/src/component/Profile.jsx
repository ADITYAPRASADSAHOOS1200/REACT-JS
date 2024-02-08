import React from 'react'
import './Profile.css'

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

export default function Profile() {
  return (
    <div className='head'>
      <h1>{user.name}</h1>
       <img className='avatar' src={user.imageUrl} alt=""  
       style={{
         width:user.imageSize,
         height:user.imageSize
        }}/>

    </div>
  )
}






 
