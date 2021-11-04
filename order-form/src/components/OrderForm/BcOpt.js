import {useState} from 'react';



const BcOpt = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    let option = event.target.value;

    setSelectedOption(option);
    props.update("bcOpt", {selectedOption: option});
  };

  
 
  return (
    <div class='container'>
      <h1>Choose Your Template</h1>
<div class='row'>
    <div class ='col'>
    
        <input
          type="radio"
          id='bcOpt'
          name='bcOpt'
          value="Classic Version"
          checked={selectedOption === "Classic Version"}
          onChange={handleChange}
         />
        <img src="/Assets/WashU/BCOptions.jpg" class ='img-fluid' alt =''/>
      </div><div class ='col'>
  
    
   
        <input
          type="radio"
          id='bcOpt'
          name='bcOpt'
          value="Updated Version"
          checked={selectedOption === "Updated Version"}
          onChange={handleChange}
        />
        <img src="/Assets/WashU/BCOptions2.jpg"  class='img-fluid' alt =''/>
        <button onClick={props.nextPage} disabled={selectedOption===''}>Next</button>
        </div>
</div>
      
      
    </div>
  );
};
export default BcOpt;
