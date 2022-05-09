import {combineReducers} from "redux";
import {deviceReducer} from "./deviceReducer";
import {userReducer} from "./userReducer";

const rootReducer = combineReducers({
    device: deviceReducer,
    user: userReducer
})

export {rootReducer};
