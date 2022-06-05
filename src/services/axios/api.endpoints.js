const axios = require("axios");

export const login = async (data) => {
    try {
        const response = await axios.post('http://localhost:5000/auth/login', data);

        return response.data;
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }
}
