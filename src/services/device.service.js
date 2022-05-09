const getDevice = (page, limit, priceGte, priceLte) => {
    return fetch(`http://localhost:5000/devices?page=${page}&limit=${limit}&priceGte=${priceGte}
    &priceLte=${priceLte}`)
        .then(value => value.json())
};

export {getDevice};
