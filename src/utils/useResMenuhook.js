import {useEffect,useState} from "react";
import { CDN_RESMENUbeforeid, CDN_RESMENUafterid } from "./constant";


const useResMenuhook=(resId)=>{
    const [resMenu,setresMenu]=useState(null);
    //fetch api 
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async()=>{
        const fetchMenuData=await fetch(CDN_RESMENUbeforeid+ resId + CDN_RESMENUafterid);
        console.log(fetchMenuData);
        const jsonMenu=await fetchMenuData.json();
        setresMenu(jsonMenu.data);
        // console.log("resmenu"+jsonMenu.data); 
    };

    return resMenu;
}


export default useResMenuhook;
