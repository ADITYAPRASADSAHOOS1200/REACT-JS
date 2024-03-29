import React from 'react'
import {getImageUrl} from "./ImageId.jsx";
import {people} from "./Data.jsx"



//  export default function About() {

//     // const listItems = people.map(person=>
         
//     //       <li key={person.id} >
//     //        <img 
//     //        src={getImageUrl(person)}
//     //        alt={person.name}
//     //         />
//     //      <p>
//     //        <b> {person.name}</b>
//     //        {''+person.profession+''}
//     //        {person.accomplishment}
//     //      </p>

//     //       </li>
//     //     )


//    const chemists=people.filter( person => 
//         person.profession === 'chemist'
//    )

//    const EveryPerson=people.filter( person => 
//       person.profession === 'chemist'
//    )


//   return (
//     <div>
//         <h1>Scientist</h1>
//         <h2>Chemists</h2>
//         <ul>
//            {chemists.map(person => 
                    
//                     <li key={person.id} >
//            <img 
//            src={getImageUrl(person)}
//            alt={person.name}
//             />
//          <p>
//          <b> {person.name}</b>
//          {''+person.profession+''}
//          {person.accomplishment}
//          </p>

//           </li>)

//            }
//         </ul>
//         <h1>Scientist</h1>
//         <h2>EVeryone</h2>
//         <ul>
//            {EveryPerson.map(person => 
                    
//                     <li key={person.id} >
//            <img 
//            src={getImageUrl(person)}
//            alt={person.name}
//             />
//          <p>
//          <b> {person.name}</b>
//          {''+person.profession+''}
//          {person.accomplishment}
//          </p>

//           </li>)

//            }
//         </ul>
//     </div>
//   )
// }


export default function About(){


   const Chemists=people.filter(element => element.profession === 'chemist')

  const Everyone=people.filter(element =>element.profession !== 'chemist')
  return(
   <div>
   <h1>Scientist</h1>
   <h2>Chemist</h2>
     <div>
       {Chemists.map(person=>
        <li>{person.name}
        <img src={getImageUrl(person)} alt={person.name}/>
         <p><b>{person.name}</b>
           {''+person.profession+''}
           {person.accomplishment}
         </p>
        </li>      
      )}
    </div>
    <h1>Every Thing else !</h1>
    <div>
       {Everyone.map(person=>
        <li>{person.name}
        <img src={getImageUrl(person)} alt={person.name}/>
         <p><b>{person.name}</b>
           {''+person.profession+''}
           {person.accomplishment}
         </p>
        </li>      
      )}
    </div> 
   </div>
  )
}