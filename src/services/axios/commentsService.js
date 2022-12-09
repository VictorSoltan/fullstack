import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://urlsession-backend.onrender.com/'});

const getComments = async () => {
    await instance.get('/api/reviews')
};

export {getComments};
