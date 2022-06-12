import {useState} from "react";
import {login} from "../../services/axios/auth.service";
import {Navigate} from "react-router-dom";

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [isSuccess, setSuccess] = useState(false);

    const handleChange = (type) => (e) => {
        setValues({...values, [type]: e.target.value});
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        const newVar = await login(values);

        if (newVar.access_token) {
            setSuccess(true);
        }

        localStorage.setItem('access_token', newVar.access_token)
        localStorage.setItem('refresh_token', newVar.refresh_token)
    }
    if (isSuccess) {
        console.log('login is ok');
        return (
            <Navigate to="/checkout"/>
        )
    }

    return (
        <form>
            <input type="email"
                   onChange={handleChange('email')}
            />
            <br/>
            <input type="text"
                   onChange={handleChange('password')}/>
            <br/>

            <input type="submit"
                   onClick={formSubmit} />

        </form>

    )
}

export {Login};
