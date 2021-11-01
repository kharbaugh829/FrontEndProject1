import {useState} from 'react';
const BcOpt = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    let option = event.target.value;
    setSelectedOption(option);
    props.update(option);
  };
  return (
    <div class='container'>
      <h1>Choose Your Template</h1>
<div class='row'>
    <div class ='col'>
    <label>
        <input
          type="radio"
          value="Classic Version"
          checked={selectedOption === "Classic Version"}
          onChange={handleChange}
         />
        <img src="/Assets/WashU/BCOptions.jpg" class ='img-fluid' alt =''/>
      </label>
    </div>
    <div class ='col'>
    <label>
        <input
          type="radio"
          value="Updated Version"
          checked={selectedOption === "Updated Version"}
          onChange={handleChange}
        />
        <img src="/Assets/WashU/BCOptions2.jpg"  class='img-fluid' alt =''/>
      </label>
        </div>
</div>
      
      
    </div>
  );
};
export default BcOpt;
