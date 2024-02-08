
import * as React from 'react';
 import Quotes from './quotes.jsx';
 import Fancytext from './fancytext.jsx';
 
 export default function Inspiration({children}) {

   const [Index,setIndex]=React.useState(0);
  
     const quote=Quotes[Index];
     const next = () => setIndex((Index + 1) % Quotes.length);


   return (
     <>
        <h1>Your inspirational quote is:</h1>
         <Fancytext text={quote}/>
         <button onClick={next}>Next</button>
          {children}
     </>
   )
 }
 
