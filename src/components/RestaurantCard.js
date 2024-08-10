import { Component } from "react";
import {CARDIMG_CDN_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import { div } from "@tensorflow/tfjs-core";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);
    const { cloudinaryImageId,name,cuisines,avgRating,costForTwo,locality,sla}=resData?.info;
    //usercontext
    const {loggedinuser}=useContext(UserContext);

    return (

        <div className="res-card w-[15vw]  m-6 ml-6 p-1 rounded-2xl  bg-gray-100 hover:bg-gray-200 shadow-xl shadow-white hover:shadow-orange-500/50 " >
        {/* shadow-[0_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_15px_-3px_rgba(255, 135, 0, 1)] */}
        {/* style={{ backgroundColor: "#f0f0f0" ,textDecoration:'none'} } */}
            <img className="rounded-2xl w-[195px] h-[150px]" src={CARDIMG_CDN_URL + cloudinaryImageId} />
        
            <div className="text-info m-3 pl-3 ">

                <h3 className="font-bold text-lg">{name}</h3> 
                <h4 >{cuisines.join(", ")}</h4>
                <h5>{avgRating}⭐</h5>
                <h5>{costForTwo}</h5>
                {/* <h5>{locality}</h5> */}
                <h5>{sla?.slaString} </h5> 
                {/* from usercontext  */}
                {/* <h5>User:{loggedinuser}</h5> */}
        
            </div>
        </div>
    )
}; 



//higher order components
// contract :takes input RestaurantCard comp if its promoted :true then add label prommoted to it 
// output that Component with promoted label
//**** */ returns a new comoponet *******
export const Withpromotedlabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div className="promoted">
                <label className="absolute ml-3 mt-1 p-1 bg-black  text-white rounded-md italic ">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};
{/* <RestaurantCard {...props}/>
    here ... is spread operator ,which takes alllll props 
    thsi props passed from body file ,accepted over here
    it contains list of restaurant
    in body file it will chexk promoted or not
 */}
export default RestaurantCard;