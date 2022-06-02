import axios from "axios";
import {setUser} from "../reducers/authReducer";

export const registration = async (email, password) => {
    try {
        const response = axios.post(`http://localhost:5000/users/registration`, {
            email,
            password
        })
        console.log(response.data);
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
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
        } catch (e) {
            alert(e.response.data.message);
        }
    }
}

