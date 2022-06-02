import {NavLink, Outlet} from "react-router-dom";
import './Header.css';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/reducers/authReducer";
import {CartBlock} from "../cartBlock/CartBlock";

const Header = () => {
    const state = useSelector(state => {
        const {auth} = state;
        return {auth}
    });

    const {isAuth} = state.auth;
    const dispatch = useDispatch();
    return (
        <>
            <header className="content">
                <NavLink to="/devices">Device</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/users">Users</NavLink>
                {!isAuth && <NavLink to="/auth">Login</NavLink>}
                {!isAuth && <NavLink to="/registration">Registration</NavLink>}
                {isAuth && <div onClick={() => dispatch(logout())}>Выход</div>}
                <div className="wrapper header_cart-btn-wrapper">
                    <CartBlock/>
                </div>
            </header>
            <Outlet/>
        </>
    )
}

export {Header};
