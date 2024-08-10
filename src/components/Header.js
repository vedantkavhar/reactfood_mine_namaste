import {LOGO_URL} from "../utils/constant";
import { useState,useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import User from "./User";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    let [btnName,setbtnName]=useState("Login");//earlier state Login

    const onlineStatus=useOnlineStatus();
// global context using useContext hook
    const {loggedinuser}=useContext(UserContext);
    // console.log({loggedinuser});

    //subscribing to storwe using selector hook
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    // sm,md,lg,xl screen size
    return (
        <div className="header flex justify-between items-center  bg-red-100   ">
            

            {/* <div className="font-bold">{loggedinuser}</div> */}
            <div className=" ">
                <img  className="logo ml-[12vw] w-[7vw] p-3" src={LOGO_URL} /> 
            </div>

            <div className="nav-items mr-[12vw]">
                <ul className="flex m-3  ">
                    <li className="px-3">Online Status :{ onlineStatus? "✔" : "❌"}</li>
                    <li className="px-3"><Link to="/home">Home</Link></li> 
                    <li className="px-3"><Link to="/about">About us</Link></li>
                    <li className="px-3"><Link to="/contact">Contact us</Link></li>
                    <li className="px-3"><Link to="/cart">Cart:({cartItems.length} dishes)</Link></li>
                    <li className="px-3"><Link to="grocery">Grocery</Link></li>
                    
                    <button className="login font-bold px-1 h-7 rounded-lg bg-green-200 hover:bg-orange-500" onClick={()=>{
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