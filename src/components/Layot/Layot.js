import {NavLink, Outlet} from "react-router-dom";
import './Layot.css';
import SearchBar from "../searchBar/SearchBar";
import {useState} from "react";

export function Layout({setValue}) {
    const [search, setSearch] = useState('');
    return (
        <>
            <header className="content">
                <NavLink to="/">Home</NavLink>
                <SearchBar setValue={setValue}/>
                {/*<NavLink to="/auth">Registration/Login</NavLink>*/}
                <NavLink to="/devices">Device</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/users">Users</NavLink>
            </header>

            <Outlet/>
        </>
    )
}

