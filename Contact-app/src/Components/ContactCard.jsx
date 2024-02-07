import React from "react";
import User from "../images/user.png"


function ContactCard(props) {
     const {id,name,email}=props.contact
    return(
           <div className="item">
             <img  className="ui avatar image" src={User} alt="user"/>
             <div className="Content">
                <div className="header">{name}</div>
                <div>{email}</div>
             </div>
            <span><i className="trash alternate outline icon" style={{color:"orange",marginTop:"7px" }}></i></span> 
           </div>
    )
}

export default ContactCard