import React from "react";
import FormControl from "./FormControl";
import "./HomeContact.css";

const HomeContact = () => {
  return (
    <section id="home-contact">
      <div className="home-contact-container">
        <h1 className="home-contact-header">Get in touch</h1>
        <p className="home-contact-text">Don't be shy, leave us a message.</p>
      </div>
      <div className="home-contact-form">
        <FormControl />
      </div>
    </section>
  );
};

export default HomeContact;
