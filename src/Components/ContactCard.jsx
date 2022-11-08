import React from "react";

const ContactCard = ( {messageArea, contactArea} ) => {
  return (
    <form action="">
      <div className="form-control">
        <label htmlFor="Fullname">Name</label>
        <input className={contactArea} type="text" />
      </div>
      <div className="form-control">
        <label htmlFor="Email">Email</label>
        <input className={contactArea} type="text" />
      </div>
      <div className="form-control message">
        <label htmlFor="Message">Message</label>
        <input className={messageArea} type="text" />
      </div>
    </form>
  );
};

ContactCard.defaultProps = {
  messageArea: "message-area",
  contactArea: "contact-area",
}
export default ContactCard;
