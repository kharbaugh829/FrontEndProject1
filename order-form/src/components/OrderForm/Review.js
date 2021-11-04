const Review = (props) => {
 
  return (
    <div>
      <p> review your order</p>
      <table class="table">
        <thead>
          <tr>
            <th>Business Card Design</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.data.bcOpt.selectedOption}</td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <thead>
          <tr>
            <th>Printing Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th>Quantity</th>
            <td>{props.data.printOpt.quantity}</td>
          </tr>
          <tr>
          <th>Ink Options</th>
            <td>{props.data.printOpt.inkOption}</td>
          </tr>
          <tr>
          <th>Logo Type</th>
            <td>{props.data.printOpt.logoType}</td>
          </tr>
        </tbody>
      </table>

      <table class="table">
        <thead>
          <tr>
            <th>Business Card Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>First & Last Name</th>
            <td>{props.data.bcInfo.enteredName}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{props.data.bcInfo.enteredTitle}</td>
          </tr>
          <tr>
            <th>Office Name</th>
            <td>{props.data.bcInfo.enteredOffice}</td>
          </tr>
          <tr>
            <th>Mail Stop Code</th>
            <td>{props.data.bcInfo.enteredMsc}</td>
          </tr>
          <tr>
            <th>Office Phone Number</th>
            <td>{props.data.bcInfo.enteredOfficePhone}</td>
          </tr>{" "}
          <tr>
            <th>Other Phone Number</th>
            <td>{props.data.bcInfo.enteredOtherPhone}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{props.data.bcInfo.enteredEmail}</td>
          </tr>
        </tbody>
      </table>
      <table class="table">
        <thead>
          <tr>
            <th>Contact Informaiton</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Contact Name</th>
            <td>{props.data.contactInfo.enteredContactName}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{props.data.contactInfo.enteredContactEmail}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{props.data.contactInfo.enteredContactPhone}</td>
          </tr>
        </tbody>
      </table>

     
      <button onClick={props.prevPage}>Previous</button>
      <button type="submit" onClick={props.submitHandler}>
        Submit
      </button>
    </div>
  );
};
export default Review;
