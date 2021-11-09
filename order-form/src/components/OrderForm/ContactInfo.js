import { useState } from "react";
const ContactInfo = (props) => {
  const [enteredContactName, setEnteredContactName] = useState("");
  const [enteredContactPhoneNumber, setEnteredContactPhoneNumber] =
    useState("");
  const [enteredContactEmail, setEnteredContactEmail] = useState("");
const [enteredContactNameIsValid, setEnteredContactNameIsValid] = useState(true);
const [enteredContactPhoneNumberIsValid, setEnteredContactPhoneNumberIsValid] = useState(true);
const [enteredContactEmailIsValid, setEnteredContactEmailIsValid] = useState(true);

const contactNameChangeHandler = (event) => {
    let name = event.target.value;
    setEnteredContactName(name);
    props.update("contactInfo", {
      enteredContactName: name,
      enteredContactEmail: enteredContactEmail,
      enteredContactPhone: enteredContactPhoneNumber,
    });
  };
  const contactPhoneNumberChangeHandler = (event) => {
    let phone = event.target.value;
    setEnteredContactPhoneNumber(phone);
    props.update("contactInfo", {
      enteredContactName: enteredContactName,
      enteredContactEmail: enteredContactEmail,
      enteredContactPhone: phone,
    });
  };
  const contactEmailChangeHandler = (event) => {
    let email = event.target.value;
    setEnteredContactEmail(email);
    props.update("contactInfo", {
      enteredContactName: enteredContactName,
      enteredContactEmail: email,
      enteredContactPhone: enteredContactPhoneNumber,
    });

  
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    if (enteredContactName.trim() === ''){
      setEnteredContactNameIsValid(false);
      return}
      
      if (enteredContactPhoneNumber.trim() === ''){
        setEnteredContactPhoneNumberIsValid(false);
       return }
         if (enteredContactEmail.trim() === ''){
          setEnteredContactEmailIsValid(false);
        return}
   
    setEnteredContactNameIsValid(true);
    setEnteredContactPhoneNumberIsValid(true);
    setEnteredContactEmailIsValid(true);
return props.nextPage
  };
  return (
    <div class ="row g-3">
      <h1>Contact Information</h1>

      <label class = 'form-label'>
        Contact First & Last Name
        <input class ='form-control'
          type="text"
          value={enteredContactName}
          onChange={contactNameChangeHandler}
          
        />{!enteredContactNameIsValid && <p style={{'color':'red'}}>Name must not be empty!</p>}
      </label>
      <label class = 'form-label'>
        Contact Phone Number
        <input class ='form-control'
          type="tel"
          value={enteredContactPhoneNumber}
          onChange={contactPhoneNumberChangeHandler}
          
        />
        {!enteredContactPhoneNumberIsValid && <p style={{'color':'red'}}>Phone Number must not be empty!</p>}
      
      </label>
      <label class = 'form-label'>
        Contact Email
        <input class ='form-control'
          type="email"
          value={enteredContactEmail}
          onChange={contactEmailChangeHandler}
         
        />
        {!enteredContactEmailIsValid && <p style={{'color':'red'}}>Email must not be empty!</p>}
      
      </label>
      <button onClick={props.prevPage}>Previous</button>
      {/* <button
        onClick={props.nextPage}
        disabled={
          enteredContactName === "" ||
          enteredContactEmail === "" ||
          enteredContactPhoneNumber === ""
        }
      > */}<button
        onClick={onClickHandler }
        
      >
        Next
      </button>
    </div>
  );
};
export default ContactInfo;
