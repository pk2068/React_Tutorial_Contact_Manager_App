import React, { useState, useEffect }from "react";
import Header from "./Header.js";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();  

  const add = (e) => {
    
    e.preventDefault();
    if (name === "" || email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.addContactHandler({name,email});
    //this.setState({ name: "", email: "" });
    setName("");
    setEmail("");
    console.log(navigate);
    navigate('/')
  };

  
    return (
      <div className="ui main">
        {/* <Header /> */}
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName( e.target.value )}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value )}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  
}

export default AddContact;
