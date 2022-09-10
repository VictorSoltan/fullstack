import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {cartReducer} from "./deviceCartReducer";
import {categoryReducer} from "./categoryReducer";
import {commentReducer} from './commentReducer';
import {userLoginReducer} from "./authReducer";
import {productDetailsReducer} from "./productDetailsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    category: categoryReducer,
    userLogin: userLoginReducer,
    productDetails: productDetailsReducer,
    productReviewCreate: commentReducer
});

export {rootReducer};
