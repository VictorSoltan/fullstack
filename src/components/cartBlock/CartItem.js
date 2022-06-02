import './CartItem.css';

const CartItem = ({
                      title, price, _id
                  }) => {
    return (
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item_price">
                <span>{price} uah</span>
                {_id}
            </div>
        </div>
    )
}

export {CartItem};
