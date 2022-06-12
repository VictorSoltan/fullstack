import {useEffect} from "react";
import {logout} from "../../services/axios/auth.service";

const Logout = () => {
    useEffect(() => {
        logout()
            .then(() => {
                localStorage.removeItem('access_token');
            })
    }, [])
    return (
        <div>
            You are log out
        </div>
    )
}

export {Logout};
