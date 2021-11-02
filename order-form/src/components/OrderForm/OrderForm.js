import { useState } from "react";
import BcInfo from "./BcInfo";
import ContactInfo from "./ContactInfo";
import BcOpt from "./BcOpt";
import PrintOpt from "./PrintOpt";
import Review from "./Review";

const OrderForm = () => {
  const [page, setPage] = useState(1);

  const [data, setData] = useState({
    bcOpt: {selectedOption: ''},
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
      quantity: '',
      inkOption: '',
      logoType: ''
    },
  });
  const updateData = (type, newData) => {
    setData((data) => {
      return { ...data, [type]: newData };
    });
  };
  const nextPage = () => {
    if (page === 5) {
      return;
    }
    setPage((page) => page + 1);
  };
  const prevPage = () => {
    if (page === 1) {
      return;
    }
    setPage((page) => page - 1);
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
        {page === 1 && <BcOpt data={data.bcOpt} update={updateData} />}
        {page === 2 && <PrintOpt data={data.printOpt} update={updateData} />}
        {page === 3 && <BcInfo data={data.bcInfo} update={updateData} />}
        {page === 4 && (
          <ContactInfo data={data.contactInfo} update={updateData} />
        )}
        {page === 5 && <Review />}
      </form>
      {page !== 1 && <button onClick={prevPage}>Previous</button>}
      {page !== 5 && <button onClick={nextPage}>Next</button>}

      {page === 5 && <button type="submit" onClick={submitHandler}>Submit</button>}
      {/* onClick= "submit" where does it go??? */}
   
    </div>
  );
};
export default OrderForm;
