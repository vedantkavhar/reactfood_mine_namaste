import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockdata";/// since we used liveapi
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    let [resList, setresList]=useState([]);//exmpty bcuz we used live api ,no need of mockdata now,so keep it empty

    let [filteredList,setfilteredList]=useState([]);//to display all cards by default and filterd cards shown if search clicked
    let [searchText,setsearchText]=useState("");

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
    console.log("body endered");
    return (filteredList.length===0)? 
    (<Shimmer/>):
    (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e)=>{
                        setsearchText(e.target.value);//when input val changes,search val updated//

                    }} /> <button className="search-btn" onClick={()=>{
                        //filter the restaurant acc to input
                        const filteredSearch=resList.filter(
                            (restaurant)=>(restaurant.info.name).toLowerCase().includes(searchText.toLowerCase())
                            // (restaurant)=> restaurant.info.name.includes(searchText)
                        );
                        
                        setfilteredList(filteredSearch);
                        // console.log(searchText);
            

                    }}>Search</button></div>


                <div className="filter-btn" onClick={()=>{
                  //use filter to > 4 rating restaurant
                    const filterRating=resList.filter(
                        (res)=> res.info.avgRating > 4
                    );
                    setresList(filterRating);//update stae var//which contains card//now card updated 
                    console.log(resList);
                    // console.log("filter clicked");
                }}><button>Top rated restaurants </button></div>
            </div>
            <div className="res-card-container">
                {/* dynamic */}
                {filteredList.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
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
