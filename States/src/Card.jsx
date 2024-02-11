 import React, { useEffect,useState } from 'react'





 export default function Card() {

     const [state,SetState]=useState([])

  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
       return res.json();
    }).then((data)=>{
       console.log(data);        SetState(data)
    })
  },[])

   return (   
     <div className='Container'>
           {state.map(element=>
            <div key={element.id} className="Card">
            <h1 className='head'><i>{element.title}</i></h1>
             <p>{element.body}</p>
             <span>by userId:{element.userId}</span>
            </div>
           )}
       </div>
   )
}
