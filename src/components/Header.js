import {LOGO_URL} from "../utils/constant";
import {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    let [btnName,setbtnName]=useState("Login");//earlier state Login

    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    
                    <button className="login" onClick={()=>{
                        // toggle 
                        // if initial login onclick logout 
                        // if inital logout onclick login 
                        btnName==="Login"? setbtnName("Logout"):setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;