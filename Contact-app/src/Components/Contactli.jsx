import React from "react";
import ContactCard from "./ContactCard";


function Contactli(props) {
   

    const RenderContactList=props.contact.map((contact)=>{
     
        return (
          <ContactCard contact={contact}></ContactCard>
        );

    })

    return(
        <div className="ui celled list">{RenderContactList}</div>
    );
}

export default Contactli