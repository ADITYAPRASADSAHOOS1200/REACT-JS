  import Profile from "./component/Profile.jsx";
import Render from "./component/Render.jsx";
import { useState } from "react";
import Avatar from "./component/Avatar.jsx";
import './App.css'
import Button from "./component/Button.jsx";

function App() {
  
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function handleClick2(){
    setCount(count-1)
  }


  function Card({ children }) {
    return (
      <div className="card">
        {children}
      </div>
    );
  }

  return (
  /* <div className="adi">*/
  /* <Profile/> */
  /* <Render/> */
  //<Button   count={count} onClick={handleClick}  Click={handleClick2} />
//<Button   count={count} onClick={handleClick}  Click={handleClick2} /> 
  // </div> 

   <Card>
   <Avatar size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId:"YfeOqp2"
        }}
      />
   </Card>
  
 
  );
}

export default App
