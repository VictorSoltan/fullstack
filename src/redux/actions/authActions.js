import axios from "axios";
import {setAuthUserData, setUser} from "../reducers/authReducer";
import {authApi} from "../../services/axios/api.endpoints";

export const registration = async (email, password) => {
    try {
        const response = axios.post(`http://localhost:5000/users/registration`, {
            email,
            password
        })
        console.log(response);
    } catch (e) {
        alert(e.response.data.message);
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user));

            const newVar = response;
            // console.log(newVar);
            localStorage.setItem('access_token', newVar.data.access_token);
            localStorage.setItem('refresh_token', newVar.data.refresh_token);
            console.log(response.data);
        } catch (e) {
            console.log(e.response.data.message);
        }
    }
}

export const logout = () => async (dispatch) => {
    authApi.logout()
        .then(response => {
            console.log(response);
            if (response.data === 0) {
                dispatch(setAuthUserData(null, null, false))
            }
        })
}
