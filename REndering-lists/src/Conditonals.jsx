import React from 'react'


function Item({ name , Ispacked,importance}){
//   if(Ispacked){
//     // return <li className='items'>{name}"✔"</li>
//     return null;
//   }
//   return <li className='items'>{name}</li>

// return <li className='items'>{ Ispacked ? name+"✔": name}</li>//ternaryOperator

// return <li className='items'>
//     { Ispacked ? 
//     (<del>{name}</del>): 
//     (name)+"✔"}
//     </li>

return (
    <li className="item">
      {/* {name} {Ispacked === false && '✔'} */}
       {/* {name} {Ispacked ?   '❌':'✔'} */}
       {name} {importance > 0 && <i>(Importance: {importance})</i>}
      
    </li>
  );


}



export default function Conditonals() {

  return (
    <div>
      <section>
         <h1>Aditya is a good boy</h1>
         {/* <Item name="Krishna is the god of universe" Ispacked={false}/>
         <Item name="the  is great" Ispacked={true}/>
         <Item name="the Jay shrree Ram is great" Ispacked={false}/>
         <Item name=" is great" Ispacked={true}/> */}
         <Item name="Krishna is the god of universe"  importance={10}/>
         <Item name="the  is great" Ispacked={true}/>
         <Item name="the Jay shrree Ram is great" importance={10}/>
         <Item name=" is great" Ispacked={true}/>
    
      </section>
    </div>
  )
}
