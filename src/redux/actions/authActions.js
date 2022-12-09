import axios from "axios";

export const registration = async (email, password, nick_name) => {
    try {
        const response = axios.post(`https://urlsession-backend.onrender.com/users/registration`, {
            email,
            password,
            nick_name
        })
        console.log(response);
    } catch (e) {
        alert(e.response.data.message);
    }
}

export const login = (value) => async (dispatch) => {
    try {
        dispatch({
            type: "USER_LOGIN_REQUEST",
        })

        const {data} = await axios.post('https://urlsession-backend.onrender.com/auth/login', value);
        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data,
        });
        console.log('login is ok');
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}
