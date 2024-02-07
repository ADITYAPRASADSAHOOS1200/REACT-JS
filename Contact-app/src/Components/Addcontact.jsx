import React from "react";


// function Addcontact() {
//     return(
//         <>
//         </>
//     )
// }

class Addcontact extends React.Component{

   state={
      name:"",
      email:"",
   }

 add=(e)=>{
    e.preventDefault()
    if(this.state.name === "" || this.state.email === ""){
      alert("all fields are mandatory!");
      return
    }else{
      this.props.addcontactHandler(this.state)
      this.setState({name:""})
      this.setState({email:""})
      // console.log(this.state);
    }
     
 }

   render(){
     return(
        <div className="ui head">
           <h2>Add Contact</h2>
           <h2>Add Contact</h2>
           <form className="ui form" onSubmit={this.add}>
              <div className="field">
               <label>Name</label>
               <input type="text" name="name" id="" placeholder="Name" 
                value={this.state.name}
                 onChange={(e)=>this.setState({name:e.target.value})} />
               </div>
              <div className="field">
               <label>Email</label>
               <input type="text" name="Email" id="" placeholder="Email" value={this.state.email}
                 onChange={(e)=>this.setState({email:e.target.value})} />
               </div>
                <button className="ui button blue">Add</button>
           </form>
        </div>
     )
   }



}


export default Addcontact