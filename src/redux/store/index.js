import {createStore} from "redux";
import {deviceReducer} from "../reducers/deviceReducer";

export const store = createStore(deviceReducer);
