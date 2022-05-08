import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/user.service";
import './Users.css';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
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
