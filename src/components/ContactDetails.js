import React from "react";
import user from "../images/man.png";
import { useLocation, Link } from 'react-router-dom'

const ContactDetails = () => {
    const location = useLocation();
    const { state } = location;
    //const { id, name, email } = props.contact;
    console.log(state);
    const {  name, email } = state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
                <div className="center-div">
                    <Link to="/">
                    <button className="ui button blue center">Back to List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};



export default ContactDetails;
