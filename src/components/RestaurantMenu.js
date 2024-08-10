import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_RESMENUbeforeid } from "../utils/constant";
import { CDN_RESMENUafterid } from "../utils/constant";
import useResMenuhook from "../utils/useResMenuhook";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    // const [resMenu,setResMenu]=useState(null);
    // const [fetchedTotalRatings, setTotalRatings] = useState(null);
    
    const {resId}=useParams();
    // const [showItems,setShowItems]=useState(false);
    const [showIndex,setShowIndex]=useState(null);

    const resMenu = useResMenuhook(resId);
    // put below logic in useRestaurantMenuhook 
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);
    
    // const fetchMenu=async()=>{
    //     const fetchMenuData=await fetch(CDN_RESMENUbeforeid+ resId + CDN_RESMENUafterid );
        
    //     const jsonMenu = await fetchMenuData.json();
    //     // console.log(jsonMenu);
    //     setResMenu(jsonMenu.data);
    //     console.log(jsonMenu.data);
    //     // const { totalRatings } = jsonMenu.data?.cards[2]?.card?.card?.info;
    //     // setTotalRatings(totalRatings);
 
    // };
    
    
    if (resMenu===null) return <Shimmer/>;
    const { name, avgRating,totalRatings,costForTwoMessage,cuisines,areaName,sla } = resMenu?.cards[2]?.card?.card?.info;

    // const { title }= resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // const { carousel } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // const { itemCards}= resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    
    // console.log("resmenu", resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    // console.log(title);
    // console.log(itemCards);

    const categories=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);

    return (
        <div className="Rest-menu-container mx-auto w-1/2 text-center"> 
            {/* <h1>{resMenu?.cards[2]?.card?.card?.info?.totalRatings}</h1> */}
            <h1 className="font-bold text-2xl">{name}</h1>
            <h2 className="font-bold">{avgRating+"⭐"} ({totalRatings}+ratings) | {costForTwoMessage}</h2>
            <h4 className="font-bold text-orange-400">{cuisines.join(", ")}</h4>
            <h4 className="font-bold"> Outlet {areaName}</h4>
            <h4 className="font-bold">{sla.minDeliveryTime}-{sla.maxDeliveryTime} minutes </h4>


            {/* top picks  */} 
            {/* accordion ,for each category have header/title and items
             */}
            <ul>
                {categories.map((category,index)=><RestaurantCategory
                      key={category.card.card.title}
                       data={category.card.card} 
                        showItems={index===showIndex ? true: false}
                        setShowIndex={()=>setShowIndex(index)}
                       />
                )}
             </ul>

            {/* brute  */}
            {/* <h3 className="text-xl">{title}</h3>  
            <ul>
            {/* dynamic  */}
                {/* {carousel.map((item)=>
                    <li key={item.dish.info.id}>
                    {item.dish.info.name} -{" Rs. "}   {item.dish.info.price/100 || item.dish.info.defaultPrice/100}
                    </li>

                )} */}
            {/* </ul>  */}
            
            {/* recommended/  */}
            {/* <h3>Recommended</h3>
            <ul>
            {/* dynamic  */}
                {/* {itemCards.map((item)=>
                    <li key={item.card.info.id}>
                    {item.card.info.name} -{" Rs. "}   {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>

                )} */}
            {/* </ul>  */}


            {/* <h3>{t</h3> */}

            {/* brute  */}


                {/*ul <li>{carousel[0].title}</li>
                <li>{carousel[1].title}</li>
                <li>{carousel[2].title}</li>
                <li>{carousel[3].title}</li> */}
            
        </div>
    )
}
export default RestaurantMenu; 