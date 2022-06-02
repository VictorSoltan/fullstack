import axios from "axios";
import {setRepos} from "../reducers/deviceReducer";

export const getDevic = (name = 'devices: %3E1') => {
    if (name === "") {
        name = "devices: %3E1"
    }

    return async (dispatch) => {
        const response = await axios.get(`http://localhost:5000/devices?name=${name}`)
        dispatch(setRepos(response.data))
    }
}
