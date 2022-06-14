import {combineReducers} from "redux";
import {deviceReducer} from "./deviceReducer";
import {userReducer} from "./userReducer";
import {cartReducer} from "./deviceCartReducer";
import {categoryReducer} from "./categoryReducer";

const rootReducer = combineReducers({
    device: deviceReducer,
    user: userReducer,
    cart: cartReducer,
    category: categoryReducer
});

export {rootReducer};
