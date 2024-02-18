
import {useState} from 'react'
 import Quotes from './Data.jsx';
 import Fancy from './Fancy.jsx';
 
 export default function Inspiration({children}){
  const [index,SetINdex]=useState(0);

  const quotes=Quotes[index];
  const pev = index > 0

  const hasNext=  index <= Quotes.length-1
  const Next=()=>{
    if(hasNext){
   SetINdex((index+1)) 
    }
    else{
      SetINdex(0)
    }
  }
  
  function Preve(){
    SetINdex((index-1))
  }


  return (
    <div>
      <h1>Get INspired app</h1>
      <Fancy text={quotes}/>
      <button onClick={Next} disabled={!hasNext}>Next</button>
      <button  className="marg"onClick={Preve} disabled={!pev}>Prev</button>
      {children}
    </div>
  )
}
