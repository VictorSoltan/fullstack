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
                {/*<DeviceCover singleDevice={singleDevice.image}/>*/}
            </div>
            <div className="order-item_title">
                <span>{device.name}</span>
            </div>
            <div className="order-item_price">
                <span>{device.price} uah.</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item_delete-icon"
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}

export {OrderItem};
