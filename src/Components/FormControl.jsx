import React from "react";

const FormControl = () => {
  return (
    <form action="">
      <div className="form-control">
        <label htmlFor="Fullname">Name</label>
        <input type="text" placeholder="Enter name" />
      </div>
      <div className="form-control">
        <label htmlFor="Email">Email</label>
        <input type="text" placeholder="Enter email" />
      </div>
      <div className="form-control">
        <label htmlFor="Message">Message</label>
        <input type="text" placeholder="Enter message" />
      </div>
    </form>
  );
};

export default FormControl;
