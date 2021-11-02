import { useState } from "react";

const PrintOpt = (props) => {
  const [quantity, setQuantity] = useState("");
  const [inkOption, setInkOption] = useState("");
  const [logoType, setLogoType] = useState("");
  const [enteredLogoType, setEnteredLogoType] = "";
  const [enteredQuantity, setEnteredQuantity] = "";
  const quantityChangeHandler = (event) => {
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
  const logoTypeChangeHandler = (event) => {
    event.preventDefault();
    let logo = event.target.value;
    setLogoType(logo);
    props.update(logo);
  };
  const enteredLogoTypeChangeHandler = (event) => {
    event.preventDefault();
    let other = event.target.value;
    setEnteredLogoType(other);
    props.update(other);
  };
  const enteredQuantityChangeHandler = (event) => {
    event.preventDefault();
    let other = event.target.value;
    setEnteredLogoType(other);
    props.update(other);
  };

  return (
    <div>
      <h1>Printing Options</h1>
      <div><label>
      Quantity
       <div><input
          type="radio"
          checked={quantity === "500"}
          onChange={quantityChangeHandler}
          value="500"
        />
        <label htmlFor={"500"}>{"500"}</label>
        <input
          type="radio"
          value="1000"
          checked={quantity === "1000"}
          onChange={quantityChangeHandler}
        />
        <label htmlFor={"1000"}>{"1000"}</label>
        <input
          type="radio"
          value="1500"
          checked={quantity === "1500"}
          onChange={quantityChangeHandler}
        />
        <label htmlFor={"1500"}>{"1500"}</label>
        <input
          type="radio"
          value="Other"
          checked={quantity === "Other"}
          onChange={quantityChangeHandler}
        />
        <label htmlFor={"Other"}>{"Other"}</label>
        {quantity === "Other" && <input
          type="text"
          value=""
          required = {quantity === "Other"}
          onChange={enteredQuantityChangeHandler}
        />}</div> 
      </label>
      </div> <label>
        Ink Options
       <div> <input
          type="radio"
          value="Color"
          checked={inkOption === "Color"}
          onChange={inkOptionChangeHandler}
        /><label htmlFor={"color"}>{"Color Ink"}</label>
        <input
          type="radio"
          value="Black"
          checked={inkOption === "Black"}
          onChange={inkOptionChangeHandler}
        /><label htmlFor={"black"}>{"Black Ink"}</label></div> 
      </label>
      <div><label>
        Logo Options<div>
        <input
          type="radio"
          value="ChancelorsLogo"
          checked={logoType === "Chancelor's Logo"}
          onChange={logoTypeChangeHandler}
        /><label htmlFor={"ChancelorsLogo"}>{"Chancelor's Logo"}</label>
        <input
          type="radio"
          value="Art's & Sciences"
          checked={logoType === "Art's & Sciences"}
          onChange={logoTypeChangeHandler}
        /><label htmlFor={"ArtsAndSciences"}>{"Art's & Sciences"}</label>
        <input
          type="radio"
          value="Sam Fox School of Design & Visual Arts"
          checked={logoType === "Sam Fox School of Design & Visual Arts"}
          onChange={logoTypeChangeHandler}
        /><label htmlFor={"Sam Fox School of Design & Visual Arts"}>{"Sam Fox School of Design & Visual Arts"}</label>
        <input
          type="radio"
          value="Other"
          checked={logoType === "Other"}
          onChange={logoTypeChangeHandler}
        /><label htmlFor={"Other"}>{"Other"}</label>
        {logoType === "Other" && <input
          type="text"
          value = ''
          required = {logoType === "Other"}
          onChange={enteredLogoTypeChangeHandler}
        />}</div>
      </label></div>
    </div>
  );
};

export default PrintOpt;
