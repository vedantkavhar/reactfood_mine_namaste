import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement(tags,attributes , children);
// tags=type 
// props=attributes +children 
// attribute =id /class 
// children =innerhtml

// react.createElement just create obj in js 
// const heading=React.createElement("h1",{},"helloworld from namaste sreact!");
// u can give id to h1 ele above inside {}

// 1
// const heading=React.createElement("h1",{id:"heading"},"helloworld from namaste react!");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// heading is react Element(obj ),pass as a children to root browser will take h1 from it



// 2
// lets create this html tree using react 
{/* <div id="parent">
    <div id="child1">
            <h1>i am h1 tag</h1>
    </div>
</div> */}

// const parent=React.createElement(
//     "div",{id:"parent"},
//     React.createElement("div",{id:"child1"},
//     React.createElement("h1",{},"i am h1 tag")
//     )
// ); 
// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// 3
//now create siblings using react 
// siblings=children of same child 
{/* <div id="child1">
    <h1>i am h1 tag</h1>
    <h2>i am h1 tag</h2>
</div>  */}

// here h1,h2 are siblings 
//NOTE: when u have to add more than 1 child use array react.createElement(tag,id,[child1,child2])

// lets create it
// const sib=React.createElement("div",{id:"child1"},
//     [React.createElement("h1",{},"i m h1 sib1"),React.createElement("h2",{},"i m h2 sib2")]//array of child
// );
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(sib);


// 4 havinng 2 child :write inside the array
{/* <div id ="parent">
         <div id="child1">
            <h1>i am h1 tag</h1>
            <h2>i am h2 tag</h2>
         </div> 
        <div id="child12>
            <h1>i am h1 tag</h1>
            <h2>i am h2 tag</h2>
        </div>  
    </div>
*/}

// in react code 
// const child2=React.createElement("div",{id:"parent"},
//     [React.createElement("div",{id:"child1"},
//         [React.createElement("h1",{},"iam h1"),React.createElement("h2",{},"iam h1")]),
//     React.createElement("div",{id:"child2"},
//         [React.createElement("h1",{},"iam h1"),React.createElement("h2",{},"iam h2")])
//     ]
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(child2);


// 5 points 
//root.render will be replace html content inside root div 
// react can be written for small portions of code
    // <h1>hello start</h1>
    // <div id="root"></div>
    // <h1>hello end</h1>

    // only root.render will replcae code of root div 
    // hello start 
    // react code 
    // hello end 