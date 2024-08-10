import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{
    // read ,subscribe,selector
    const cardItems=useSelector((store)=>store.cart.items);

    // dispatch 
    const dispatch= useDispatch();
    const handleClear=()=>{
        dispatch(clearCart());
    }

    return(
        <div className="w-1/2 m-auto ">
            <h1 className="text-center p-2 font-bold text-lg">Cart</h1>
            <button className=" p-1 bg-black text-white ml-[20vw] " onClick={handleClear}>Clear Cart</button>
            <ItemList items={cardItems}/>
            {cardItems.length===0 && <h1>Your cart is empty ,add items to Cart</h1>}

        </div>
    );
};

export default Cart;