import { BsStopwatch } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { FcCustomerSupport } from "react-icons/fc";
import { GiBasket } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { PiHandbagSimple } from "react-icons/pi";
import { BiSolidReport } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { PiBasketThin } from "react-icons/pi";
import { IoTicketSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";

function SideBar () {

  return (
    
 <div className="side-bar">
  <h1><span className="side-span"><BsStopwatch />CRM</span>ADMIN</h1>
  <div className="dashboard1">
        <ul className='dash-icon'>
            <li><span className="span1"> <BsStopwatch /></span><span className="span2">Dashboard</span></li>
            <li><span className="span1"> <FcCustomerSupport /></span><span className="span2">Customers</span><span className="span3"> <IoIosArrowBack /></span></li>
            <li><span className="span1"> <GiBasket /></span><span className="span2">Transaction</span><span className="span3"> <IoIosArrowBack /></span></li>
            <li><span className="span1"> < IoCartOutline /></span><span className="span2">Sales</span><span className="span3"> <IoIosArrowBack /></span></li>
            <li><span className="span1"> < MdLibraryBooks /></span><span className="span2">Task</span><span className="span3"> <IoIosArrowBack /></span></li>
            <li><span className="span1"> <  PiHandbagSimple/></span><span className="span2">Accounting</span><span className="span3"> <IoIosArrowBack /></span></li>
            <li><span className="span1"> <  BiSolidReport /></span><span className="span2">Report</span><span className="span3"> <IoIosArrowBack /></span></li>
            <li><span className="span1"> < GoBell/></span><span className="span2">Attendance</span><span className="span3"> <IoIosArrowBack /></span></li>
            <li><span className="span1"> < IoCartOutline /></span><span className="span2">recruitment</span><span className="span3"> <IoIosArrowBack /></span></li>
            <li><span className="span1"> <GiBasket /></span><span className="span2">Payroll</span><span className="span3"> <IoIosArrowBack /></span></li>
            <li><span className="span1"> <PiBasketThin /></span><span className="span2">stock</span><span className="span3"> <IoIosArrowBack /></span></li>
            <li><span className="span1"> < IoTicketSharp/></span><span className="span2">Tickets</span><span className="span3"> <IoIosArrowBack /></span></li>
            <li><span className="span1"> <TfiMenuAlt /></span><span className="span2">Utilities</span><span className="span3"> <IoIosArrowBack /></span></li>

        </ul>
        </div>


       

 </div>
  )
}

export default SideBar;