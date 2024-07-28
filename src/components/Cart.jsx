import { useDispatch, useSelector } from "react-redux";
import { ITEM_IMG_CDN_URL } from "../utils/constants";
import { clearCart } from "../redux-store/cartSlice";
import { removeItem } from "../redux-store/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item.index));
    }

    return (
        <div className="restaurant-menu">
            <div className="restaurant-menu-content">
                <div className="menu-items-container">
                    <h1 className="cart-header">Cart</h1>
                    <div className="cart">
                        <button
                            className="clear-cart-btn"
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                        {cartItems.length === 0 && <h1>Cart is empty!</h1>}
                        <div className="menu-items-list">
                            {cartItems.map((item) => (
                            <div className="menu-item" key={item?.id}>
                                <div className="menu-item-details">
                                <h3 className="item-title">{item?.name}</h3>
                                <p className="item-cost">
                                    {item?.price > 0
                                    ? new Intl.NumberFormat("en-IN", {
                                        style: "currency",
                                        currency: "INR",
                                        }).format(item?.price / 100)
                                    : " "}
                                </p>
                                <p className="item-desc">{item?.description}</p>
                                </div>
                                <div className="menu-img-wrapper">
                                {item?.imageId && (
                                    <img
                                    className="menu-item-img"
                                    src={ITEM_IMG_CDN_URL + item?.imageId}
                                    alt={item?.name}
                                    />
                                )}
                                <button className="remove-btn" onClick={() => handleRemoveItem(item)}>REMOVE</button>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;