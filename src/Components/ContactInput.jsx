import React from "react";



const ContactInput = (props) => {
    return (
        <form action="">
            <label>{props.labelhead}</label>
            <input type={props.inputtype} placeholder={props.placeholder} className={props.classstyle}/>
        </form>
    )
}

export default ContactInput;