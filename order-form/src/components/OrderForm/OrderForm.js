import { useState } from "react";
import BcInfo from "./BcInfo";
import ContactInfo from "./ContactInfo";
import BcOpt from "./BcOpt";
import PrintOpt from "./PrintOpt";
import Review from "./Review";

const OrderForm = () => {
  const [page, setPage] = useState(1);

  const [data, setData] = useState({
    bcOpt: { selectedOption: "" },
    bcInfo: {
      enteredName: "",
      enteredTitle: "",
      enteredOffice: "",
      enteredMsc: "",
      enteredOfficePhone: "",
      enteredOtherPhone: "",
      enteredEmail: "",
    },
    contactInfo: {
      enteredContactName: "",
      enteredContactEmail: "",
      enteredContactPhone: "",
    },
    printOpt: {
      quantity: "",
      inkOption: "",
      logoType: "",
    },
  });

  const nextPage = () => {
    if (page === 5) {
      return;
    }
    setPage((previousPage) => previousPage + 1);
  };
  const prevPage = () => {
    if (page === 1) {
      return;
    }
    setPage((previousPage) => previousPage - 1);
  };
  const updateData = (type, newData) => {
    setData((prevData) => {
      return { ...prevData, [type]: newData };
    });
    console.log(type);
    console.log(newData);
    
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* progress bar? */}
      <progress max="5" value={page} />
      {/* content here */}
      <form onSubmit={submitHandler}>
        {page === 1 && <BcOpt data ={data} update={updateData} nextPage={nextPage} />}
        {page === 2 && <PrintOpt data ={data} update={updateData} nextPage={nextPage} prevPage={prevPage}/>}
        {page === 3 && <BcInfo data ={data} update={updateData} nextPage={nextPage} prevPage={prevPage}/>}
        {page === 4 && (
          <ContactInfo data ={data} update={updateData} nextPage={nextPage} prevPage={prevPage}/>
        )}
        {page === 5 && <Review data ={data} prevPage={prevPage} submitHandler={submitHandler}/>}
      </form>
      {/* {page !== 1 && <button onClick={prevPage}>Previous</button>}
      {page !== 5 && <button onClick={nextPage}>Next</button>} */}
{/* 
      {page === 5 && (
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      )} */}
      {/* onClick= "submit" where does it go??? */}
    </div>
  );
};
export default OrderForm;
