
import {useState} from 'react';
import BcInfo from './BcInfo';
import ContactInfo from './ContactInfo';
import BcOpt from './BcOpt';
import PrintOpt from './PrintOpt';
import Review from './Review';

const OrderForm = () =>{
  const [page, setPage]= useState(1);
// todo.... add data state

// const [data, setData] = useState({
//   contactName:{
//   },
//   contactEmail:{
//   },
//   contactPhone:{
//   },
//   additionalInfo:{
//   },
//   designOption:{},
//   logoType:{},
//   qty:{},
//   inkOpt:{},
//   orderName:{
//   },
//   title:{},
//   officeName:{},
//   msc:{},
//   officePhone:{},
//   orderEmail:{}
// })

const nextPage = () => {
  if (page === 5){return};
setPage((page) => page + 1);
}
const prevPage = () => {
  if (page === 1){return};
setPage((page) => page - 1);
}
// const submitHandler = (event) => {
//   event.preventDefault();
//   

//   }
// }
    return(
        <div>
        {/* progress bar? */}
<progress max = "5" value ={page} />
        {/* content here */}
<form>{page === 1 && <BcOpt />}
{page === 2 && <PrintOpt />}
{page === 3 && <BcInfo />}
{page === 4 && <ContactInfo />}
{page === 5 && <Review />}</form>
{page !== 1 && <button onClick ={prevPage}>Previous</button>}
{page !== 5 && <button onClick ={nextPage}>Next</button>}

{page === 5 && <button type="submit" >Submit</button>}
{/* onClick= "submit" where does it go??? */}
{/* https://www.youtube.com/watch?v=dybbUOmtd0Y for help */}

          {/* <p>Choose Your Layout</p>
          <div><img src ="Assets//WashU/BCOptions.jpg" alt =''/><p>OR</p><img src ='/Assets/WashU/BCOptions2.jpg' alt='' /></div> */}
          
        </div>
    )
}
export default OrderForm;