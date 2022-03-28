const getUsers = () => {
    return fetch('http://localhost:5000/users')
        .then(value => value.json())
};

export {getUsers};
