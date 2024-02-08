import React from "react";

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  
  export default function Render() {

     const listItems=products.map((item)=>{
      return <li key={item.id} 
             style={{
             color:item.isFruit ? "green" : "red"
              }}>
              {item.id}{"."}{item.title}
          
             </li>

     })

  function handleclick(){
    alert("you clicked me")
  }

    return (     
        <>
        <ul>{listItems}</ul> 
        <button onClick={handleclick}>Click me</button>
        </>
    );
     
  }

  