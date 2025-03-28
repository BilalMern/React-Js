import LOGO_URL from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className="Header_Main">
        <img src={LOGO_URL} alt="" className="Header-logo" />
        <div className="Header-links">
          <ul>
            <li>Online Status: {(onlineStatus ===true)? "✅" : "🔴"}</li>
            <li> <Link to="/">Home </Link> </li>
    
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>

          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
