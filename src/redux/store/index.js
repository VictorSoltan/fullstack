import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"

import {rootReducer} from "../reducers";

const cartItemsFromLocalStorage = localStorage.getItem('itemsInCart')
    ? JSON.parse(localStorage.getItem('itemsInCart'))
    : [];

const initialState = {
    cart: {
        itemsInCart: cartItemsFromLocalStorage
    },
};

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);
