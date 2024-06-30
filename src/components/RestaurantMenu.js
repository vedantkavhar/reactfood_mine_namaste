import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
    const [resMenu,setresMenu]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const fetchMenuData=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=673425&catalog_qa=undefined&submitAction=ENTER");

        const jsonMenu = await fetchMenuData.json();
        // console.log(jsonMenu);
        setresMenu(jsonMenu);
        console.log(jsonMenu.data);
    };
    // console.log("Resmenu:"+ resMenu);
    
    
    
    
    // const { name }= resMenu.cards[2].card.card.info;
    // console.log(resMenu);
    // const { totalRatings } = resMenu?.data?.cards[2]?.card?.card?.info;
    // console.log(resMenu);



    // const {avgRating,costForTwoMessage,cuisines}=;
    
    return ( resMenu===null)?
    (<Shimmer/>):
    (
        <div className="Rest-menu-container">
            
            <h1>{resMenu?.cards[2]?.card?.card?.info?.totalRatings}</h1>


            {/* <h1>{totalRatings}</h1> */}
            {/* <h1>{resMenu?.data?.cards[2]?.card?.card?.info?.name}</h1> */}
            {/* <h4>{resMenu?.data?.cards[2]?.card?.card?.info?.avgRating}</h4> */}
            {/* <h4>{resMenu?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h4>
            <h4>{resMenu?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h4>
            <h4>{resMenu?.data?.cards[2]?.card?.card?.info?.sla.minDeliveryTime+"-"+resMenu?.data?.cards[2]?.card?.card?.info?.sla.maxDeliveryTime} mins</h4>
            */}
            <h3>Top Picks</h3>  
            <ul>
                <li>Burgers</li>
                <li>Biryani</li>
                <li>Bengan</li>
                <li>panipuroo</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;