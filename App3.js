import React from "react";
import ReactDOM from "react-dom/client";


// const heading=React.createElement("h1",{id:"heading"},"helloworld from namaste react!");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// in jsx

// jsx code transpiled before reaches js engine >>parcel>>babel 
// parcel transiple this code 
// babel does this transpilng nside parcee 
// babael convert js to react 

// jsx is html like ,xml like syntax 
// React elemnt 
const jsxheading1= (<h1 id="heading">i am heading from jsx</h1>);
const jsxheading2= (
<h1 id="heading">
i am heading from jsx
</h1>);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

// React component 
// two ways 
// class based component =OLD 
// functionsal component =NEW 

// const Comp1=()=>{
//     return <h1>hello with return</h1>
// };
const Comp2=()=>(
    <h1>hello with without return</h1>
);
const Comp3=()=>(
    <div id="container">
        <h1>hello from component3</h1>
    </div>
); 

//component composition :usign 1 component ninto other comPonent
/* hell is comp used in nam comp==compnert composition */
const Hell=()=>(
    <h1>hello </h1>
);
const Name=()=>(
    <div className="container"> 
        <Hell/>
        <h1>vedant</h1>
    </div>
);

// u can write js inside jsx usgin {}
// also write react elemen int component using {}
const number=1000;
const newele=(
    <h3>i am ele <Name/></h3>
);
const Comp4=()=>(
    <div className="container">
        {/* {newele}, */}
        <h1>hello {number} </h1>
    </div>
);

// u can put anything inside anythin ele inside comp,comp inside ele using {}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(newele); 



// // swiiggy before api 
// const Header = () => {
//     return (
//         <div className="header">
//             <div className="logo">
//                 <img src="images/foodordering.jpg" />
//             </div>

//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About us</li>
//                     <li>Contact us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     )
// };
// const RestaurantCard = (props) => {
//     const { resName, cuisine, rating, deliverytime } = props;
//     return (
//         <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//             <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e" alt="" />
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h5>{rating}</h5>
//             <h5>{deliverytime}</h5>
//         </div>
//     )
// };

// const Body = () => {
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="res-card-container">
                
//                 <RestaurantCard resName="Burger King" cuisine="Buger,Pizza" rating="4.3 stars" deliverytime="39 minutes" />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//             </div>
//         </div>
//     )
// };
// const AppLayout = () => {
//     return (
//         <div className="app">
//             <Header /> ,
//             <Body />
//         </div>
//     )
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
