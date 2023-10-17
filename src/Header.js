import { useState } from 'react';
import logo from '../img/logo.png'



const Header = () => {

    const [isLogin, setIsLogin] = useState('Login');

    return (
        <div className="header">
            <div className="logo-conatiner">
                <img className="img-src" src={logo} alt="BHOJ_GHAR" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className='isLogin-btn' onClick={() => {
                        isLogin == 'Login' ? setIsLogin('Logout') : setIsLogin('Login');
                    }}>{isLogin }</button>
                </ul>
            </div>
        </div>
    );
};


export default Header;