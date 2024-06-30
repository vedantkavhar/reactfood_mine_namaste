
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";

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


const AppLayout = () => {
    return (
        <div className="app">
            <Header /> 
            <Outlet/>
        </div>
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
                path:"/restaurants/:resId",
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