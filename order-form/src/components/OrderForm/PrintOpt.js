import { useState } from "react";

const PrintOpt = (props) => {
  const [quantity, setQuantity] = useState("");
  const [inkOption, setInkOption] = useState("");
  const [logoType, setLogoType] = useState("");
const [enteredLogoType, setEnteredLogoType] =('');
  const quantityChangleHandler = (event) => {
    event.preventDefault();
    let quantity = event.target.value;
    setQuantity(quantity);
    props.update(quantity);
  };
  const inkOptionChangeHandler = (event) => {
    event.preventDefault();
    let ink = event.target.value;
    setInkOption(ink);
    props.update(ink);
  };
  const logoTypeChangeHandler = (event) =>{
      event.preventDefault();
      let logo = event.target.value;
      setLogoType(logo);
      props.update(logo);
  }
  const enteredLogoTypeChangeHandler =(event) =>{
      event.preventDefault();
      let other = event.target.value;
      setEnteredLogoType(other);
      props.update(other);
  }

  if (logoType === 'Other') {
      logoType.value = {enteredLogoType}
  }

  return (
    <div>
      <h1>Printing Options</h1>
      <label>
        Quantity
        <input
          type="radio"
          value="500"
          checked={quantity === "500"}
          onChange={quantityChangleHandler}
        >
          500
        </input>
        <input
          type="radio"
          value="1000"
          checked={quantity === "1000"}
          onChange={quantityChangleHandler}
        >
          1000
        </input>
        <input
          type="radio"
          value="1500"
          checked={quantity === "1500"}
          onChange={quantityChangleHandler}
        >
          1500
        </input>
      </label>
      <label>
        Ink Options
        <input
          type="radio"
          value="Color"
          checked={inkOption === "Color"}
          onChange={inkOptionChangeHandler}
        >
          Color
        </input>
        <input
          type="radio"
          value="Black"
          checked={inkOption === "Black"}
          onChange={inkOptionChangeHandler}
        >
          Black
        </input>
      </label>
      <label>Logo Options
      <input type="radio" value="Chancelor's Logo" checked ={logoType === "Chancelor's Logo"} onChange ={logoTypeChangeHandler}>

      </input>
      <input type="radio" value="Art's & Sciences" checked ={logoType === "Art's & Sciences"} onChange ={logoTypeChangeHandler}>

      </input>
      <input type="radio" value="Sam Fox School of Design & Visual Arts" checked ={logoType === "Sam Fox School of Design & Visual Arts"} onChange ={logoTypeChangeHandler}>

      </input>
      <input type="radio" value="Other" checked = {logoType === "Other"} onChange ={logoTypeChangeHandler}>

      </input><input type='text' value="Other Value" disabled = {!logoType === 'Other'} onChange = {enteredLogoTypeChangeHandler}></input></label>
    </div>
  );
};

export default PrintOpt;
