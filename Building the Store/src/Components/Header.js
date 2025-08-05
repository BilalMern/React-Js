import LOGO_URL from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Header = () => {
  const onlineStatus = useOnlineStatus();
 const {loggedInUser}=useContext(UserContext)
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
        <img src={LOGO_URL} alt="" className="w-30" />
        </div>
        <div className="Header-links overflow-x-auto">
          <ul className="flex gap-10 pr-8 font-bold text-lg" >
            <li>Online Status: {(onlineStatus ===true)? "✅" : "🔴"}</li>
            <li> <Link to="/">Home </Link> </li>
    
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
          <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
      <hr class="border-t-2 border-gray-300 mb-8 "></hr>
    </>
  );
};
export default Header;





