import axios from "axios";
import {logout} from "../../services/axios/auth.service";

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({type: "ORDER_CREATE_REQUEST"});

        const {
            userLogin: {userInfo},
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post('http://localhost:5000/api/orders', config);
        dispatch({type: "ORDER_CREATE_SUCCESS", payload: data});

        localStorage.removeItem("cartItems");
    } catch (error) {
        const message = await error.response && error.response.data.message
        ? error.response.data.message
            : error.message;
        if (message === 'Not authorized, token failed') {
            dispatch(logout());
        }
    }
}
