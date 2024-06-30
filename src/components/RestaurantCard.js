import {CARDIMG_CDN_URL} from "../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId,name,cuisines,avgRating,costForTwo,locality,sla}=resData?.info;
    return (

        <div className="res-card" style={{ backgroundColor: "#f0f0f0" ,textDecoration:'none'} }>
            <img src={CARDIMG_CDN_URL + cloudinaryImageId} />
        <Link>
            
            <h3 >{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating}</h5>
            <h5>{costForTwo}</h5>
            <h5>{locality}</h5>
            <h5>{sla?.slaString} </h5> 
        </Link>
        </div>
    )
}; 
export default RestaurantCard;