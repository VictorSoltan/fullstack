import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {'authorization': localStorage.getItem("refresh_token") + " " + localStorage.getItem("access_token")}
});

const getDevice = (page, limit, sort, order, brand, type) => {
    return instance.get(`/devices?page=${page}&limit=${limit}
        &sortBy=${sort}&order=${order}&${brand !== null ? `brand=${brand}` : ''}&${type !== null ? `type=${type}` : ''}`)
};

const getDeviceById = async (_id) =>
    await instance.get(`/devices/${_id}`);

const searchDevice = (searchText) => {
    return instance.get(`/devices/search/${searchText}`);
};

const addReview = (device, comment) => {
    return instance.post(`/api/reviews/${device}`, {comment: comment});
};

const postDevice = async (device) =>
    await instance.post('/devices', device);

const deleteDeviceById = async (_id) =>
    await instance.delete(`/devices/${_id}`);

export {getDevice, getDeviceById, postDevice, deleteDeviceById, addReview, searchDevice};


