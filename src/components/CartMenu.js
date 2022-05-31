import {Button} from "react-bootstrap";
import './CartMenu.css';
import {CartItem} from "./cartBlock/CartItem";

export const CartMenu = (items, totalprice, makeOrder) => {
    return (
        <div className="cart-menu">
            <div className="cart_menu_devices_list">
                {items.length > 0
                    ? items.map(device => <CartItem key={device.title} price={device.price} title={device.title}/>)
                    : 'Корзина пуста'}
            </div>
            {items.length > 0 ? (
                <div className="cart-menu_arrange">
                    <div className="cart-menu_total-price">
                        <span>Итого:</span>
                    {/*    <span>{calcTotalPrice(items)} uah</span>*/}
                    </div>
                    <Button type="primary" size="m" onClick={makeOrder}>
                        Оформить заказ
                    </Button>
                </div>
            ) : null}
        </div>
    )
}
