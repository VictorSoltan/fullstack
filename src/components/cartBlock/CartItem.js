import './CartItem.css';

const CartItem = ({
                      title, price
                  }) => {
    return (
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item_price">
                <span>{price} uah</span>
            </div>
        </div>
    )
}

export {CartItem};
