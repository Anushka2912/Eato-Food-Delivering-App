import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {

  const [loginBtn, setLoginBtn] = useState("Login")

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center gap-10 px-[30px] py-[20px] border-b border-black headerContainer">
      <div className="logoContainer">
        <img src="https://i.ibb.co/1RFR8BK/logo-eato.jpg" alt="company-logo-image" className="w-full max-w-[80px] h-auto mainLogo" />
      </div>
      <div className="w-full flex justify-end navContainer">
        <ul className="flex justify-between items-center gap-5 list-none">
          <li>
            <Link to="/" className="text-black">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-black">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="text-black">Contact Us</Link>
          </li>
          <li>Online Status: {onlineStatus ? "Online" : "Offline"}</li>
          <li>
            <button className="bg-black border border-black rounded-full text-white py-1 px-4 hover:bg-transparent hover:text-black hover:border-black transition-colors duration-300" 
              onClick={
                () => {
                  loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                }
              }
            >
              {loginBtn}
            </button>
          </li>
          <li><p>{loggedInUser}</p></li>
          <li className="flex gap-2"><Link to="/cart" className="text-black"><img src="https://i.ibb.co/W2QmCh2/shopping-cart.jpg" alt="cart-icon" className="w-full max-w-[25px] h-auto cartIcon" /></Link>({cartItems.length})</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
