import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/'
});

const getDevice = async (page, limit, priceGte, priceLte) =>
    await instance.get(`devices?page=${page}&limit=${limit}&priceGte=${priceGte}
&priceLte=${priceLte}`);

const getDeviceById = async (_id) =>
    await instance.get(`/devices/${_id}`);

const postDevice = async (car) =>
    await instance.post('/devices', car);

const deleteDeviceById = async (_id) =>
    await instance.delete(`/devices/${_id}`);

export {getDevice, getDeviceById, postDevice, deleteDeviceById};




// axios
//     .post('http://localhost:5000/devices', {_id: 1, name: 'My title', type: 'My body', email: 'hejak@mail.com'})
//     .then(response => {
//         console.log(response.data)
//     })
//     .catch(error => {
//         console.log(error)
//     });

