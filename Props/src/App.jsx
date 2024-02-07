import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";



import './App.css'

function App() {
   
  return (
    <>
     <Navbar/>
     <div className="flex">
     <Card name={"Aditya"}  desc={"Dynamic React component that generates quotes with customizable themes."}
       links={"https://images.pexels.com/photos/20099573/pexels-photo-20099573/free-photo-of-haus.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
     <Card name={"Mama"}  desc={"Dynamic React component that generates with customizable themes."}
       links={"https://images.pexels.com/photos/20099573/pexels-photo-20099573/free-photo-of-haus.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
     <Card name={"Gopi"}  desc={"Dynamic React component that generates Gopi ki gaand  with customizable themes."}
       links={"https://images.pexels.com/photos/20099573/pexels-photo-20099573/free-photo-of-haus.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
     <Card name={"Parag"}  desc={"Dynamic React component that generates quotes with customizable themes."}
       links={"https://images.pexels.com/photos/20099573/pexels-photo-20099573/free-photo-of-haus.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
     
     </div>
     <Footer/>
    </>
  )
}

export default App
