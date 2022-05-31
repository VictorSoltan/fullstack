import {useSelector} from "react-redux";
import {BiCartAlt} from 'react-icons/bi';
import {CartMenu} from "../CartMenu";
import {ItemsInCart} from "../itemsInCart/ItemsInCart";
import {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";

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
        navigate('/order');
    }, [navigate]);

    return (
        <div className="cart-block">
            <ItemsInCart quantity={itemsInCart.length}/>
            <BiCartAlt
                className="cart-icon"
                color="white"
                size={25}/>
            <span className="total-price">{totalPrice} uah</span>
            {isCartMenuVisible &&
            <CartMenu items={itemsInCart} totalPrice={totalPrice} makeOrder={handleGoToOrderClick}/>}
        </div>
    )
}

export {CartBlock};
