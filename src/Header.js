import { useState } from "react";
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';




const Header = () => {

    const [isLogin, setIsLogin] = useState('Login');
   


    return (
        <div className="header">
            <div className="logo-conatiner">
                <img className="img-src" src={logo} alt="BHOJ_GHAR" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
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