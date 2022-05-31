import axios from "../axios";

const endpoints = {
    login: (data) => axios.post("/auth/login", data),
    logout: (data) => axios.post("/auth/logout", data),
};

export default endpoints;
