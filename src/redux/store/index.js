import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"

import {rootReducer} from "../reducers";

export const store = createStore(
    rootReducer,
    (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) :
        {},
    applyMiddleware(thunk),
);

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
});
