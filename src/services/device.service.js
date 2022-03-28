const getDevice = () => {
    return fetch('http://localhost:5000/devices')
        .then(value => value.json())
};

export {getDevice};
