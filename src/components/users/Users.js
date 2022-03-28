import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/user.service";
import './Users.css';
import {Layout} from "../Layot/Layot";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);

    const filteredUsers = users.filter(user => {
        return user.nick_name.toLowerCase().includes(value.toLowerCase());
    })

    return (
        <div>
            <Layout setValue={setValue}/>
            <div>
                 <User key={users._id} item={users} filteredUsers={filteredUsers}/>
            </div>
        </div>)

}
