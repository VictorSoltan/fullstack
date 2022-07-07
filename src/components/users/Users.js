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
        <div className="padding">
            <div>
                {
                    users.map(value => <User key={value._id} item={value}/>)
                }
            </div>
        </div>)

}

export {Users};
