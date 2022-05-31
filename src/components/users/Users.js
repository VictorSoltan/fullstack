import {useEffect, useState} from "react";
import {User} from "./user/User";
import {getUsers} from "../../services/axios/user.service";
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, []);

    return (
        <div>
            <div>
                {
                    users.map(value => <User key={value.id} item={value}/>)
                }
            </div>
        </div>)

}

export {Users};
