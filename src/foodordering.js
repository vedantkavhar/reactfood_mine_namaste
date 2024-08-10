
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import {lazy,Suspense} from "react";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";

// food order 
// header 
//     logo 
//     nav items 
//     cart 
// body  
//     search 
//     cards restaurant 

// footer
//     links media  
//     copyright 

const Grocery=lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
    // to populate belo data to whole app or modify context data 
    const [ userName, setUserName ]=useState();
    useEffect(()=>{
        const data={
            name: "Akshay sai",
        };
        setUserName(data.name);//userName=Akshay saini
    },[]);
    return (
        //using providder u can modify global context
        // now whole app loggedin user value is changed to username whihc is Akshay saini
        //default
        <Provider   store={appStore}>
            <UserContext.Provider value={{ loggedinuser : userName, setUserName }}>
                <div className="app">
                    <Header /> 
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
};


// developing a routere 
// which page to load ,after  a path 
const Approuter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/home",
                element:<Body/>,
            },  
            {
                path:"/about",
                element:<About/>,
             },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}>
                             <Grocery/>
                        </Suspense>,
            },
            {
                path:"/restaurants/:resId",//dynamice route
                element:<RestaurantMenu/>,
            },

        ]
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
// using approuter to render 
root.render(<RouterProvider router={Approuter} />);

// resDat is prop ,key 
// res obj =obj  