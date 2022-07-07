import {combineReducers} from "redux";
import {deviceReducer} from "./deviceReducer";
import {userReducer} from "./userReducer";
import {cartReducer} from "./deviceCartReducer";
import {categoryReducer} from "./categoryReducer";
import {searchReducer} from "./searchReducer";

const rootReducer = combineReducers({
    device: deviceReducer,
    user: userReducer,
    cart: cartReducer,
    category: categoryReducer,
    search: searchReducer
});

export {rootReducer};
