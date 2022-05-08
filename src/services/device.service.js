const getDevice = (page, limit, priceGte, priceLte, name) => {
    return fetch(`http://localhost:5000/devices?page=${page}&limit=${limit}&priceGte=${priceGte}
    &priceLte=${priceLte}&name=${name}`)
        .then(value => value.json())
};

// import axios from 'axios';
// import {getUsers} from "./user.service";
//
// const getDevice = axios.get(urls.api)
//     .then(response => {
//         console.log(response.data)
//     })
//     .catch((error) => console.log(error))
//
// const makeQuery = url => (
//     getUsers
//         .get(urls.api + url)
//         .then(response => (response.data))
//         .catch(e => {
//             return e.response?.status
//         })
// )

// const devicesApi = {
//     getById: id => (makeQuery(`device/${id}`)),
//     searchDevices: (name, page) => (makeQuery(`/search/devices/?name=${name}&page=${page}`))
// }


export {getDevice};
