import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../cart.utils/cart.utils";
import {OrderItem} from "../orderItem/OrderItem";
import {Button} from "react-bootstrap";

const OrderPage = () => {
    const state = useSelector(state => {
        const {cart, device} = state;
        return {cart, device}
    });

    const {itemsInCart} = state.cart;
    if (itemsInCart < 1) {
        return <h1>Ваша корзина пуста</h1>
    }

    const totalPrice = itemsInCart.reduce((acc, device) => acc += device.price, 0);

    return (
        <div className="order-page">
            <div className="order-page_left">
                {itemsInCart.map(device => <OrderItem device={device}/>)}
            </div>
            <div className="order-page_right">
                <div className="order-page_total-price">
                    <span>
                        {itemsInCart.length} товаров на сумму {totalPrice} грн
                    </span>
                </div>
            </div>
            <Button>Оформить заказ</Button>
        </div>
    )
}

export {OrderPage};
