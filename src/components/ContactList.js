import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import Header from "./Header.js";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  //const contacts = [{ id: 1, "name": "john", "email": "john@gmail.com" }, { id: 2, "name": "steve", "email": "steve@gmail.com" }]

  const renderContactList = props.contacts.map((contact) => {
    return (
        <ContactCard
          contact={contact}
          clickHander={deleteConactHandler}
          key={contact.id}
        />      
    );
  });

//className="ui main"

  return (    
    <div className="main">
      <h3>Contact List
      <Link to="/add" >
      <button className="ui button blue right" >Add Contact</button>
      </Link>
      </h3>

      <div className="ui celled list">
        {/* <Header /> */}
        
        {renderContactList}
      </div>
      </div>
  );

};

export default ContactList;
