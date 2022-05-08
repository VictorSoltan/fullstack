import {NavLink, Outlet} from "react-router-dom";
import './Layot.css';

export function Layout() {
    return (
        <>
            <header className="content">
                <NavLink to="/auth">Auth</NavLink>
                <NavLink to="/devices">Device</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/basket">Basket</NavLink>
            </header>

            <Outlet/>
        </>
    )
}

