import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://new-test-shop-app.herokuapp.com'
});

const getUsers = async () => await axiosInstance.get('/users');

export {getUsers};
