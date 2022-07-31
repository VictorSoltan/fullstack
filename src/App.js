import {Users, DeviceDetails, Registration, CartBlock, CartPage, Logout} from "./components";
import {Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom';
import './index.css';
import Products from "./components/products/Products";
import './App.css';
import Header from "./components/header/Header";
import {Admin} from "./components/admin/Admin";
import Sliders from "./components/slider/Slider";
import React from "react";
import {SearchElement} from "./components/search/SearchElement";
import {Search} from "./components/search/Search";

const App = () => {
    const isAuth = localStorage.getItem('access_token');

    return (
        <>
            <Router>
                <Header/>
                <div className="myClass">
                    <Search/>
                </div>
                <Routes>
                    <Route path="/" element={<Products/>}/>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="devices" element={<Products/>}/>
                    <Route path="users" element={<Users/>}/>
                    <Route path="basket" element={<CartBlock/>}/>
                    <Route path='/devices/:_id' element={<DeviceDetails/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/search/:name" element={<SearchElement/>}/>
                    <Route path="/search" element={<Search/>}/>
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
