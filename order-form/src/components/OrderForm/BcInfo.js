import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const BcInfo = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredOffice, setEnteredOffice] = useState("");
  const [enteredMsc, setEnteredMsc] = useState("");
  const [enteredOfficePhone, setEnteredOfficePhone] = useState("");
  const [enteredOtherPhone, setEnteredOtherPhone] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const nameChangeHandler = (event) => {
    event.preventDefault();
    let name = event.target.value;
    setEnteredName(name);
    props.update(name);
  };
  const titleChangeHandler = (event) => {
    event.preventDefault();
    let title = event.target.value;
    setEnteredTitle(title);
    props.update(title);
  };
  const officeChangeHandler = (event) => {
    event.preventDefault();
    let officeName = event.target.value;
    setEnteredOffice(officeName);
    props.update(officeName);
  };
  const mscChangeHandler = (event) => {
    event.preventDefault();
    let msc = event.target.value;
    setEnteredMsc(msc);
    props.update(msc);
  };
  const officePhoneChangeHandler = (event) => {
    event.preventDefault();
    let officePhone = event.target.value;
    setEnteredOfficePhone(officePhone);
    props.update(officePhone);
  };
  const otherPhoneChangeHandler = (event) => {
    event.preventDefault();
    let otherPhone = event.target.value;
    setEnteredOtherPhone(otherPhone);
    props.update(otherPhone);
  };
  const emailChangeHandler = (event) => {
    event.preventDefault();
    let email = event.target.value;
    setEnteredEmail(email);
    props.update(email);
  };

  return (
    <div>
      <h1>Business Card Information</h1>

      <label>First & Last Name
      <input
        type="text"
        id="name"
        value={enteredName}
        onChange={nameChangeHandler}
      />
      </label>
      <label>Title
      <input
        type="text"
        id="title"
        value={enteredTitle}
        onChange={titleChangeHandler}
      /></label>

      <label>Office Name
      <input
        type="text"
        id="officeName"
        value={enteredOffice}
        onChange={officeChangeHandler}
      /></label>

      <label>Mail Stop Code
      <input
        type="text"
        id="msc"
        value={enteredMsc}
        onChange={mscChangeHandler}
      /></label>

      <label>Office Phone
      <input
        type="tel"
        id="officePhone"
        value={enteredOfficePhone}
        onChange={officePhoneChangeHandler}
      />
      </label>
      <label>Other Phone
      <input
        type="tel"
        id="otherPhone"
        value={enteredOtherPhone}
        onChange={otherPhoneChangeHandler}
      />
      </label>
      <label>Email
      <input
        type="email"
        id="email"
        value={enteredEmail}
        onChange={emailChangeHandler}
      />
      </label>
    </div>
  );
};
export default BcInfo;
