import React, { useState } from 'react'
import SculptureList from"./EvenData.jsx"


const Events = () => {

 const [Index,SetIndex] = useState(0);
 const [show,SetShow] = useState(false);

 const hasPrev = Index > 0; 
 const hasNext =  Index  < SculptureList.length-1

function Next() {
  if(hasNext){
    SetIndex(Index + 1 )
  }else{
    SetIndex(0)
  }
}
function Prev(){
    if(hasPrev){
        SetIndex(Index-1)
    }else{
        SetIndex(0)
    }
}

function ShowMore (){
   SetShow(!show)    
}
 


 let sculpture=SculptureList[Index];
 console.log(sculpture);

  return (
    <div className="flex">
     <button onClick={Next}  disabled={!hasNext}  >Next</button>
     <button onClick={Prev} disabled={!hasPrev}>Prev</button>
      <h3>{sculpture.name}</h3>
      <h4>({Index + 1}of{SculptureList.length})</h4>
      <div>
      <img 
       src={sculpture.url} 
       alt={sculpture.alt} />
      </div>
       
       <button onClick={ShowMore}>{show ? 'Hide' : 'Show'} details </button>
         {show && <p>{sculpture.description}</p>}
    </div>
  )
}

export default Events
