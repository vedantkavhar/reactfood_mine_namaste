import { useDispatch } from "react-redux";
import { CARDIMG_CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
const ItemList=({items})=>{
//dispatch additeem 
    const dispatch=useDispatch();
    const handlecartitem=(item)=>{
        dispatch(addItem(item));
    };

    // console.log(items,"items");
    return(
        <div className="ItemList mx-2 bg-gray-100">
            {items.map((item)=><div key={item.card.id} className="border-b-[1px] border-gray-300 py-2 text-left flex justify-between m-2 rounded-lg">
                    <div className="leftiteminfo w-[36vw] my-4">
                        <div className="font-bold  text-md text-gray-800 ">{item.card.info.name}</div>
                        <div className=" ">₹
                            { item.card.info.defaultPrice/100 ||  item.card.info.price/100 }
                        </div>
                        <p className="text-gray-500">{item.card.info.description}</p>
                    </div>
                    <div className="rightiteminfo my-4  w-40  " >
                        <div className="absolute">
                            <button className=" text-green-600  mx-11 mt-1 w-20 text-lg font-bold p-1 px-3 border border-green-100 bg-white rounded-lg"
                            //dispatch to store
                            onClick={()=>handlecartitem(item)}
                            >ADD+</button>
                        </div>
                        <img className=" rounded-lg" src={CARDIMG_CDN_URL+item.card.info.imageId} alt="" />
                    </div>
                </div>)}
        </div>
    );
};

export default ItemList;