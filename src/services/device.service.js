const getDevice = (page, limit, priceGte, priceLte, name) => {
    return fetch(`http://localhost:5000/devices?page=${page}&limit=${limit}&priceGte=${priceGte}
    &priceLte=${priceLte}&name=${name}`)
        .then(value => value.json())
};

export {getDevice};
