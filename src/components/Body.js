import RestaurantCard, { Withpromotedlabel } from "./RestaurantCard";
// import resList from "../utils/mockdata";/// since we used liveapi
import { useState , useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import User from "./User";

const Body = () => {

    let [resList, setresList]=useState([]);//exmpty bcuz we used live api ,no need of mockdata now,so keep it empty

    let [filteredList,setfilteredList]=useState([]);//to display all cards by default and filterd cards shown if search clicked
    let [searchText,setsearchText]=useState("");

    const RestaurantPromoted= Withpromotedlabel(RestaurantCard);

    const {loggedinuser, setUserName}=useContext(UserContext);


    useEffect(()=>{ 
      fetchData();
    },[]);

    const fetchData= async ()=>{ 
      const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json= await data.json();

    //   console.log(json);
      setresList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }; 



    // shimmer ui
    //conditoinal rendereingif tru do this elese that

    // if(resList.length===0){
    //   return <Shimmer/>;
    // }

    // if list emty shimmer run 
    // else cards render 
    console.log("body endered",resList);

    // not working online offline
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
        return (
            <h1>
            youare offline ! please try again later!!
            </h1>
        );
    

    return (resList.length===0)? 
    (<Shimmer/>):
    (
        <div className="body ml-[12vw] mr-[12vw]  ">
            <div className="filter-and-search flex justify-between mx-3 my-5">

                <div className="filter flex justify-center  items-center">
                    <div className="filter-btn  p-1 rounded-lg  bg-orange-200 hover:bg-orange-500" onClick={()=>{
                        //use filter to > 4 rating restaurant
                            // console.log(resList+"reslist");
                            const filterRating=resList.filter(
                                (res)=> res.info.avgRating > 4
                            );
                            setfilteredList(filterRating);//update stae var//which contains card//now card updated 
                            // console.log(resList+"reslist");
                            // console.log("filter clicked");
                        }}><button >Top rated restaurants </button></div>
                </div>
                <div className="search  ">
                    <input type="text" placeholder="Restaurant name or dish😋"
                    className="search-box border border-solid rounded-lg border-orange-400 p-1 w-[15vw]" 
                    value={searchText} 
                    onChange={(e)=>{
                        setsearchText(e.target.value);//when input val changes,search val updated//

                    }} /> <button className="search-btn  p-1  rounded-lg bg-orange-200 hover:bg-orange-500" onClick={()=>{
                        //filter the restaurant acc to input
                        console.log(resList)
                        const filteredSearch=resList.filter(
                            (restaurant)=>(restaurant.info.name).toLowerCase().includes(searchText.toLowerCase())
                            // (restaurant)=> restaurant.info.name.includes(searchText)
                        );
                        
                        setfilteredList(filteredSearch);
                        // console.log(searchText);
            

                    }}>Search</button>
                </div>

                {/* <div className="sachinapply">
                    <label >User: </label>
                    <input type="text" placeholder="apply" 
                    className="border border-solid border-orange-500  rounded-lg" 
                    value={loggedinuser}
                    onChange={(e)=>setUserName(e.target.value)} />
                </div> */}

            </div>
        

          
            <div className="res-card-container flex flex-wrap  ">
                {/* dynamic */}
                {filteredList.map((restaurant)=>(
                    <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
                    {/* if promoted=true ,show Restpromoted else Restaurant card  */}
                        {restaurant.info.avgRating >4.2 ? (<RestaurantPromoted  resData={restaurant}/>) :(<RestaurantCard  resData={restaurant} />)}

                        {/* <RestaurantCard  resData={restaurant} /> */}

                        {/* resData={restaurant} this are props passed to both comp */}
                    </Link>
                ))}; 


                {/* not recommended  */}
                {/* index is also unique , can be used as a key  */}
                {/* {resList.map((restaurant,index)=>(
                    <RestaurantCard key={index} resData={restaurant} />
                ))}; */}

                {/* brute force ,not recommended */}
                {/* <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} />
                <RestaurantCard resData={resList[2]} />
                <RestaurantCard resData={resList[3]} />
                <RestaurantCard resData={resList[4]} />
                <RestaurantCard resData={resList[5]} />
                <RestaurantCard resData={resList[6]} />
                <RestaurantCard resData={resList[7]} />
                <RestaurantCard resData={resList[8]} />
                <RestaurantCard resData={resList[9]} />
                <RestaurantCard resData={resList[10]} />
                <RestaurantCard resData={resList[11]} /> */}
               
               
                
                {/* brute force ,not recommended */}
                {/* <RestaurantCard name="burger king"/> */}
                
               
            </div>
        </div>
    )
};

export default Body;
