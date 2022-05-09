import {createStore} from "redux";
// import {deviceReducer} from "../reducers/deviceReducer";
import {rootReducer} from "../reducers";

export const store = createStore(rootReducer);
