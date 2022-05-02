import React from "react";
import { useLocation } from 'react-router-dom';
import ContactDetails from "./ContactDetails";
import {useParams} from "react-router-dom";

const ContactDetailsWrapper = (props) => {
    let location = useLocation();
    const { id } = useParams();
    console.log(location);
    console.log(props);
    console.log(id);

    return <ContactDetails id={id} />;
  };

  export default ContactDetailsWrapper;