import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/'
});

const getUsers = async () => await axiosInstance.get('users');

export {getUsers};
