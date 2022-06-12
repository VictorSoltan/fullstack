import {combineReducers} from "redux";
import {deviceReducer} from "./deviceReducer";
import {userReducer} from "./userReducer";
import {cartSliceReducer} from "./deviceCartReducer";
import {categoryReducer} from "./categoryReducer";

const rootReducer = combineReducers({
    device: deviceReducer,
    user: userReducer,
    cart: cartSliceReducer,
    category: categoryReducer
});

export {rootReducer};
