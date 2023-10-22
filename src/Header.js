import { useState } from "react";
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/hooks/useOnlineStatus";




const Header = () => {

    const [isLogin, setIsLogin] = useState('Login');
    const isOnline = useOnlineStatus();
   


    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-conatiner">
                <img className="w-56" src={logo} alt="BHOJ_GHAR" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {isOnline == true ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">GroceryMart</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button
                        className="isLogin-btn"
                        onClick={() => {
                            isLogin == "Login"
                                ? setIsLogin("Logout")
                                : setIsLogin("Login");
                        }}
                    >
                        {isLogin}
                    </button>
                </ul>
            </div>
        </div>
    );
};


export default Header;