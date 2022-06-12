import axios from "axios";

export const registration = async (email, password) => {
    try {
        const response = axios.post(`http://localhost:5000/users/registration`, {
            email,
            password
        })
        console.log(response);
    } catch (e) {
        alert(e.response.data.message);
    }
}
