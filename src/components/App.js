import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import ContactDetailsWrapper from "./ContactDetailsWrapper";
import api from '../api/contacts';
import { BrowserRouter, Route, Routes, useHistory } from "react-router-dom";


function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // retrieve contacts from REST API
  const retrieveContacts = async () => {
    //console.log("response API A");
    const response = await api.get("/contacts");
    //console.log("response API B", response.data);
    return response.data;
  }

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {

    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const getAllContacts = async () => {
    const allContacts = await retrieveContacts();
    if (allContacts) {
      setContacts(allContacts);
    }
  }

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);   

    getAllContacts();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);



  return (
    <div className="ui container center">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactList getContactId={removeContactHandler} contacts={contacts} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/contact/:id" element={<ContactDetails /> } />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
