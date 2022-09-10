import {
    Users, ProductDetails, Registration, CartBlock, CartPage,
    Logout, Admin, Search, Sliders, Products, SearchElement
} from "./components";
import {Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom';
import './App.css';
import Header from "./components/header/Header";
import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "./theme";
import {Footer} from "./components/footer/Footer";

const App = () => {
    const isAuth = localStorage.getItem('access_token');
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <>
            <Router>
                <Header/>
                <div className="myClass2">
                    <Search/>
                </div>
                <Routes>
                    <Route path="/" element={<Products/>}/>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="devices" element={<Products/>}/>
                    <Route path="users" element={<Users/>}/>
                    <Route path="basket" element={<CartBlock/>}/>
                    <Route path='/devices/:_id' element={<ProductDetails/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/search/:name" element={<SearchElement/>}/>
                    <Route path="/checkout"
                           element={!isAuth ? <Navigate to="/devices"/> : <p>checkout</p>}
                    />
                </Routes>
            </Router>
        </>

    );
}


{/*    <button onClick={switchTheme}>Switch theme</button>*/
}

export default App;
