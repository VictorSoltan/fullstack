import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/'
});

const getUsers = async () => await axiosInstance.get('users');



axiosInstance.interceptors.request.use(
    (config) => {
        const authToken = Cookies.get("auth-token");

        if (authToken) {
            config.headers.authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error => Promise.reject(error))
);

export {getUsers, axiosInstance};
