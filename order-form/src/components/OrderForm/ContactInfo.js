import {useState} from 'react';
  const ContactInfo = (props) => {
  const [enteredContactName, setEnteredContactName] = useState('');
  const [enteredContactPhoneNumber, setEnteredContactPhoneNumber] = useState('');
  const [enteredContactEmail, setEnteredContactEmail] = useState('');
  
  const contactNameChangeHandler = event =>{
    event.prevent.default();
    let name = event.target.value;
    setEnteredContactName(name);
    props.updateData(name);
  }
  const contactPhoneNumberChangeHandler = event =>{
    event.prevent.default();
    let phone = event.target.value;
    setEnteredContactPhoneNumber(phone);
    props.updateData(phone);
  }
  const contactEmailChangeHandler = event => {
    event.prevent.default();
    let email = event.target.value;
    setEnteredContactEmail(email);
    props.updateData(email);
  }
  return (
    <div>
      <h1>Contact Information</h1>
      
        <label>Contact First & Last Name</label>
        <input type="text" value ={enteredContactName} onChange={contactNameChangeHandler}></input>

        <label>Contact Phone Number</label>
        <input type="tel" value ={enteredContactPhoneNumber} onChange={contactPhoneNumberChangeHandler}></input>

        <label>Contact Email</label>
        <input type="email" value ={enteredContactEmail} onChange={contactEmailChangeHandler}></input>
    
    </div>
  );
};
export default ContactInfo;
