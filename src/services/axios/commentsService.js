import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:5000/'});

const getComments = async () => {
    await instance.get('/api/reviews')
};

export {getComments};
