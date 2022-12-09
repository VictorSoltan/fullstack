import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://urlsession-backend.onrender.com'
});

const getUsers = async () => await axiosInstance.get('/users');

export {getUsers};
