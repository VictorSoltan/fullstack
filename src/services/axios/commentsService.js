import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://new-test-shop-app.herokuapp.com/'});

const getComments = async () => {
    await instance.get('/api/reviews')
};

export {getComments};
