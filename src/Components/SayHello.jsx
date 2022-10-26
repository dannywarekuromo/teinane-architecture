import React from "react";
import ContactInput from "./ContactInput";
import "./SayHello.css";

const SayHello = () => {
  return (
    <>
      <section id="home-contact">
        <ContactInput labelhead="Name:" inputtype="text" placeholder="Name" classstyle="say-hello"/>
        <ContactInput labelhead="Email:" inputtype="email" placeholder="Email" classstyle="say-hello"/>
        <ContactInput labelhead="Message:" inputtype="text" placeholder="What's on your mind?" classstyle="say-hello"/>
      </section>
    </>
  );
};

export default SayHello;
