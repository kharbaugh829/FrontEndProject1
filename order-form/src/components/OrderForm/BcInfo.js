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
    props.update("bcInfo", {
      enteredName: name,
      enteredTitle: enteredTitle,
      enteredOffice: enteredOffice,
      enteredMsc: enteredMsc,
      enteredOfficePhone: enteredOfficePhone,
      enteredOtherPhone: enteredOtherPhone,
      enteredEmail: enteredEmail,
    });
  };
  const titleChangeHandler = (event) => {
    let title = event.target.value;
    setEnteredTitle(title);
    props.update("bcInfo", {
      enteredName: enteredName,
      enteredTitle: title,
      enteredOffice: enteredOffice,
      enteredMsc: enteredMsc,
      enteredOfficePhone: enteredOfficePhone,
      enteredOtherPhone: enteredOtherPhone,
      enteredEmail: enteredEmail,
    });
  };
  const officeChangeHandler = (event) => {
    let officeName = event.target.value;
    setEnteredOffice(officeName);
    props.update("bcInfo", {
      enteredName: enteredName,
      enteredTitle: enteredTitle,
      enteredOffice: officeName,
      enteredMsc: enteredMsc,
      enteredOfficePhone: enteredOfficePhone,
      enteredOtherPhone: enteredOtherPhone,
      enteredEmail: enteredEmail,
    });
  };
  const mscChangeHandler = (event) => {
    let msc = event.target.value;
    setEnteredMsc(msc);
    props.update("bcInfo", {
      enteredName: enteredName,
      enteredTitle: enteredTitle,
      enteredOffice: enteredOffice,
      enteredMsc: msc,
      enteredOfficePhone: enteredOfficePhone,
      enteredOtherPhone: enteredOtherPhone,
      enteredEmail: enteredEmail,
    });
  };
  const officePhoneChangeHandler = (event) => {
    let officePhone = event.target.value;
    setEnteredOfficePhone(officePhone);
    props.update("bcInfo", {
      enteredName: enteredName,
      enteredTitle: enteredTitle,
      enteredOffice: enteredOffice,
      enteredMsc: enteredMsc,
      enteredOfficePhone: officePhone,
      enteredOtherPhone: enteredOtherPhone,
      enteredEmail: enteredEmail,
    });
  };
  const otherPhoneChangeHandler = (event) => {
    let otherPhone = event.target.value;
    setEnteredOtherPhone(otherPhone);
    
    props.update("bcInfo", {
      enteredName: enteredName,
      enteredTitle: enteredTitle,
      enteredOffice: enteredOffice,
      enteredMsc: enteredMsc,
      enteredOfficePhone: enteredOfficePhone,
      enteredOtherPhone: otherPhone,
      enteredEmail: enteredEmail,
    });
  };
  const emailChangeHandler = (event) => {
    let email = event.target.value;
    setEnteredEmail(email);
    props.update("bcInfo", {
      enteredName: enteredName,
      enteredTitle: enteredTitle,
      enteredOffice: enteredOffice,
      enteredMsc: enteredMsc,
      enteredOfficePhone: enteredOfficePhone,
      enteredOtherPhone: enteredOtherPhone,
      enteredEmail: email,
    });
  };

  return (
    <div>
      <h1>Business Card Information</h1>

      <label>
        First & Last Name
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
        />
      </label>
      <label>
        Title
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </label>

      <label>
        Office Name
        <input
          type="text"
          value={enteredOffice}
          onChange={officeChangeHandler}
        />
      </label>

      <label>
        Mail Stop Code
        <input type="text" value={enteredMsc} onChange={mscChangeHandler} />
      </label>

      <label>
        Office Phone
        <input
          type="tel"
          value={enteredOfficePhone}
          onChange={officePhoneChangeHandler}
        />
      </label>
      <label>
        Other Phone
        <input
          type="tel"
          value={enteredOtherPhone}
          onChange={otherPhoneChangeHandler}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
      </label>
      <button onClick={props.prevPage}>Previous</button>
      <button onClick={props.nextPage} disabled = {enteredName === '' ||
      enteredTitle === '' ||
      enteredOffice === '' ||
      enteredMsc === '' ||
      enteredOfficePhone === '' ||
      enteredOtherPhone === '' ||
      enteredEmail === ''}>Next</button>
    </div>
  );
};
export default BcInfo;
