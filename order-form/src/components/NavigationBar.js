import React from 'react';
import Home from './Home';
import ContactUs from './ContactUs';
const NavigationBar = () => {
    return(
<div><button value ="Home" type = "button" onClick={Home}>Home</button> 
<button value ="Contact Us" type = "button" onClick={ContactUs}>Contact Us</button></div>
    )

};

export default NavigationBar;