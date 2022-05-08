import {combineReducers} from "redux";
import {deviceReducer} from "./deviceReducer";
import {filterDevices} from "./filterDevReducer";
import {userReducer} from "./userReducer";

const rootReducer = combineReducers({
    device: deviceReducer,
    filter: filterDevices,
    user: userReducer
})

export {rootReducer};
