import {combineReducers} from "redux";
import {deviceReducer} from "./deviceReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import {cartSliceReducer} from "./deviceCartReducer";

const rootReducer = combineReducers({
    device: deviceReducer,
    user: userReducer,
    auth: authReducer,
    cart: cartSliceReducer
});

export {rootReducer};
