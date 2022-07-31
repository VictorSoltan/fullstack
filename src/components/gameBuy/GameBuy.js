import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";

const GameBuy = ({device}) => {
    const state = useSelector(state => {
        const {cart, device} = state;
        return {cart, device}
    });
    const {itemsInCart} = state.cart;

    const isItemInCart = itemsInCart.some((item) => item._id === device._id);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation();
        // const json = JSON.stringify(state.itemsInCart);
        if (isItemInCart) {
            dispatch({type: "deleteItemFromCart", payload: device._id})
        } else {
            dispatch({type: "setItemInCart", payload: device});
        }
    }

    // useEffect(() => {
    //     if (isMounted.current) {
    //         const json = JSON.stringify(state.itemsInCart);
    //         localStorage.setItem('cart', json);
    //     }
    //     isMounted.current = true;
    // }, [itemsInCart]);

    return (
        <div className="game-buy">
            <span>{device.price} uah</span>
            <Button type={isItemInCart ? 'secondary' : 'primary'} onClick={handleClick}>
                {isItemInCart ? "Убрать из корзины" : "В корзину"}
            </Button>
        </div>
    )
}

export {GameBuy};
