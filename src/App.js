import {Users, DeviceDetails, Registration, CartBlock, OrderPage, Logout} from "./components";
import {Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom';
import './index.css';
import Home from "./components/devices/Home";
import './App.css';
import Header from "./components/header/Header";
import {Admin} from "./components/admin/Admin";
import Sliders from "./components/slider/Slider";
import React from "react";

const App = () => {
    const isAuth = localStorage.getItem('access_token');

    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="devices" element={<Home/>}/>
                    <Route path="users" element={<Users/>}/>
                    <Route path="basket" element={<CartBlock/>}/>
                    <Route path='/devices/:_id' element={<DeviceDetails/>}/>
                    <Route path="/order" element={<OrderPage/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    {/*<Route path="/comments" element={<Comments/>}/>*/}
                    <Route path="/checkout"
                           element={!isAuth ? <Navigate to="/devices"/> : <p>checkout</p>}
                    />
                    <Route path="/slider" element={<Sliders/>}/>

                </Routes>
            </Router>
        </>
    );
}

export default App;
