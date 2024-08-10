import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory=({data,showItems,setShowIndex})=>{
    // const [showItems,setShowItems]=useState(false);
    const handleClick=()=>{
        setShowIndex();
    }
    return (
        <div className="item-accordion mx-auto mt-4 " >
            {/* accordion header */}
            <div className="flex justify-between font-bold m-2 cursor-pointer "  onClick={handleClick}>
                <span>{data.title}({data.itemCards.length}) </span>
                <span>{"‿"}</span>
            </div>
            <div>
              {showItems && <ItemList items={data.itemCards} />}
            </div>
            <div className="white-bar h-3 bg-gray-200"></div>
            {/* accordion body/itemss */}
            {/* <ul> */}
                {/* props.data.itemCards.map((eachitem)=>eachitem.) */}
            {/* </ul> */}
        </div>
    );
};
 
export default RestaurantCategory; 