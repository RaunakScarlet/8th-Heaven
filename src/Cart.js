import { useDispatch, useSelector } from "react-redux"
import RestrauntCategoryItem from "./RestrauntCategoryItem"
import { clearItems } from "../store/cartSlice";
import emptyCart from '../img/emptyCart.png'

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearItems = () => {
    dispatch(clearItems());
}

    return cartItems.length == 0 ? (
        <div className="text-center m-4 p-4">
            <div className="w-full m-auto">
                <img
                    className="w-6/12 m-auto"
                    src={emptyCart}
                    alt="Cart is Empty"
                />
            </div>
        </div>
    ) : (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button
                    className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearItems}
                >
                    clear cart
                </button>
                <RestrauntCategoryItem items={cartItems} />
            </div>
        </div>
    );
}

export default Cart
