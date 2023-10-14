import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./img/logo.png";

const RestrauntCard = () => {
    return (
        <div className="restrauntCard">
            <img className="res_logo" src={logo} alt="Hots & Spicy" />
            <h3>Hots & Spicy</h3>
            <h4>Dhosa, Soth-Indian, Asian</h4>
            <h4>4.8 stars</h4>
            <h4>20 mins</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restrauntContainer">
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div className="header">
            <div className="logo-conatiner">
                <img
                    className="img-src"
                    src={logo}
                    alt="BHOJ_GHAR"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};


const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body/>
    </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
