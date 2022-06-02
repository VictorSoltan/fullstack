import {useDispatch} from "react-redux";
import './OrderItem.css';
import {AiOutlineCloseCircle} from "react-icons/all";

const OrderItem = ({device}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({type: "deleteItemFromCart", payload: device._id});
    }
    return (
        <div className="order-item">
            <div className="order-item_cover">
                {/*<DeviceCover device={device.image}/>*/}
            </div>
            <div className="order-item_title">
                <span>{device.name}</span>
            </div>
            <div className="order-item_price">
                <span>{device.price} uah.</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item_delete-icon"
                    onclick={handleClick}
                />
            </div>
        </div>
    )
}

export {OrderItem};
