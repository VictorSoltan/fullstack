import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import './Header.css';
// import {useDispatch, useSelector} from "react-redux";
import {CartBlock} from "../cartBlock/CartBlock";

const Header = () => {
   const isAuthN = localStorage.getItem('access_token');

    // const dispatch = useDispatch();
    return (
        <>
            <header className="content">
                <NavLink to="/devices">Devices</NavLink>
                <NavLink to="/users">Users</NavLink>
                {!isAuthN && <NavLink to="/auth">Login</NavLink>}
                {!isAuthN && <NavLink to="/registration">Registration</NavLink>}
                {isAuthN && <div>
                    <NavLink to="/logout">Logout</NavLink>
                </div>}
                <div className="wrapper header_cart-btn-wrapper">
                    <CartBlock/>
                </div>
            </header>
            <Outlet/>
        </>
    )
}

export {Header};

