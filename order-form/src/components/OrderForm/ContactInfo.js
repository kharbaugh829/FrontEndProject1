import {useState} from 'react';
  const ContactInfo = (props) => {
  const [enteredContactName, setEnteredContactName] = useState('');
  const [enteredContactPhoneNumber, setEnteredContactPhoneNumber] = useState('');
  const [enteredContactEmail, setEnteredContactEmail] = useState('');
  
  const contactNameChangeHandler = event =>{
    
    let name = event.target.value;
    setEnteredContactName(name);
    props.update('contactInfo',{enteredContactName: name,
      enteredContactEmail: enteredContactEmail,
      enteredContactPhone: enteredContactPhoneNumber});
  }
  const contactPhoneNumberChangeHandler = event =>{
    
    let phone = event.target.value;
    setEnteredContactPhoneNumber(phone);
    props.update('contactInfo',{enteredContactName: enteredContactName,
    enteredContactEmail: enteredContactEmail,
    enteredContactPhone: phone});
  }
  const contactEmailChangeHandler = event => {
    
    let email = event.target.value;
    setEnteredContactEmail(email);
    props.update('contactInfo',{enteredContactName: enteredContactName,
      enteredContactEmail: email,
      enteredContactPhone: enteredContactPhoneNumber});
  }
  return (
    <div>
      <h1>Contact Information</h1>
      
        <label>Contact First & Last Name
        <input type="text" value ={enteredContactName} onChange={contactNameChangeHandler}/>
</label>
        <label>Contact Phone Number
        <input type="tel" value ={enteredContactPhoneNumber} onChange={contactPhoneNumberChangeHandler}/>
</label>
        <label>Contact Email
        <input type="email" value ={enteredContactEmail} onChange={contactEmailChangeHandler}/>
        </label>
        <button onClick={props.prevPage}>Previous</button>
      <button onClick={props.nextPage}>Next</button>
    </div>
  );
};
export default ContactInfo;
