import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/'
});

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
