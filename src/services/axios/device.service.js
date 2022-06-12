import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:5000/'
});

const getDevice = (searchText, page, limit, sort, order, categoryId) => {
    return instance.get(`/devices?name=${searchText}&page=${page}&limit=${limit}
        &sortBy=${sort}&order=${order}&brand=${categoryId}`)
};

const getDeviceById = async (_id) =>
    await instance.get(`/devices/${_id}`);

const postDevice = async (device) =>
    await instance.post('/devices', device);

const deleteDeviceById = async (_id) =>
    await instance.delete(`/devices/${_id}`);

export {getDevice, getDeviceById, postDevice, deleteDeviceById};


