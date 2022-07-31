import {useSelector} from "react-redux";
import {ItemsInCart} from "../itemsInCart/ItemsInCart";
import {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import './CartBlock.css';
import {BiCartAlt} from "react-icons/all";

const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const navigate = useNavigate();
    const state = useSelector(state => {
        const {cart} = state;
        return {cart}
    });

    const {itemsInCart} = state.cart;
    const totalPrice = itemsInCart.reduce((acc, device) => acc += device.price, 0);
    const handleGoToOrderClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate('/cart');
    }, [navigate]);

    return (
        <div className="cart-block" onClick={handleGoToOrderClick}>
            <ItemsInCart quantity={itemsInCart.length}/>

            <BiCartAlt
                className="cart-icon"
                color="white"
                size={25} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {totalPrice > 0 ? (
                    <span className="total-price">{totalPrice} uah</span>)
                : null}
            {/*{isCartMenuVisible && <CartMenu/>} - мини корзина при наведении*/}
        </div>
    )
}

export {CartBlock};
