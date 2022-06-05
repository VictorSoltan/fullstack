import {Button} from "react-bootstrap";
import './CartMenu.css';
import {CartItem} from "./cartBlock/CartItem";
import {useSelector} from "react-redux";

export const CartMenu = ({onClick}) => {
    const state = useSelector(state => {
        const {cart} = state;
        return {cart}
    });

    const {itemsInCart} = state.cart;
    const totalPrice = itemsInCart.reduce((acc, device) => acc += device.price, 0);

    return (
        <div className="cart-menu">
            <div className="cart_menu_devices_list">
                {itemsInCart.length > 0
                    ? itemsInCart.map((device) => (
                        <CartItem key={device.title} price={device.price}
                                                      title={device.title} _id={device._id}/>
                    ))
                    : 'Корзина пуста'}
            </div>
            {itemsInCart.length > 0 ? (
                <div className="cart-menu_arrange">
                    <div className="cart-menu_total-price">
                        <span>Итого:</span>
                            <span>{totalPrice} uah</span>
                    </div>
                    <Button type="primary" size="m">
                        Оформить заказ
                    </Button>
                </div>
            ) : null}
        </div>
    )
}
