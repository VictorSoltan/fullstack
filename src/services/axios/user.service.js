import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://shop-with-products.herokuapp.com'
});

const getUsers = async () => await axiosInstance.get('/users');

export {getUsers};
