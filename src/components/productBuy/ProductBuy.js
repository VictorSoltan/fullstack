import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";

const ProductBuy = ({device}) => {
    const state = useSelector(state => {
        const {cart, device} = state;
        return {cart, device}
    });
    const {itemsInCart} = state.cart;

    const isItemInCart = itemsInCart.some((item) => item._id === device._id);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (isItemInCart) {
            dispatch({type: "deleteItemFromCart", payload: device._id})
        } else {
            dispatch({type: "setItemInCart", payload: device});
        }
    }

    return (
        <div className="game-buy">
            <span>{device.price} uah</span>
            <Button type={isItemInCart ? 'secondary' : 'primary'} onClick={handleClick}>
                {isItemInCart ? "Убрать из корзины" : "В корзину"}
            </Button>
        </div>
    )
}

export {ProductBuy};
