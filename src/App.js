import {Users, Header, DeviceDetails, Registration, CartBlock, OrderPage, Login, Logout} from "./components";
import {Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom';
import './index.css';
import Home from "./components/home/Home";

const App = () => {
    const isAuth = localStorage.getItem('access_token');

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route path="auth" element={<Login/>}/>
                        <Route path="registration" element={<Registration/>}/>
                        <Route path="devices" element={<Home/>}/>
                        {/*<Route path="/shop" element={<Shop/>}/>*/}
                        <Route path="users" element={<Users/>}/>
                        <Route path="basket" element={<CartBlock/>}/>
                        <Route path='/devices/:_id' element={<DeviceDetails/>}/>
                        <Route path="/order" element={<OrderPage/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                        <Route path="/checkout"
                               element={!isAuth ? <Navigate to="/devices"/> : <p>checkout</p>}
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
