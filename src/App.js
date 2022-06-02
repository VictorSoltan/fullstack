import {Users, Devices, Header, DeviceDetails, Registration, CartBlock, OrderPage, Login} from "./components";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import {Shop} from "./pages/Shop";
import './index.css';
import Search from "./components/search/Search";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route path="auth" element={<Login/>}/>
                        <Route path="registration" element={<Registration/>}/>
                        <Route path="devices" element={<Devices/>}/>
                        <Route path="shop" element={<Shop/>}/>
                        <Route path="users" element={<Users/>}/>
                        <Route path="basket" element={<CartBlock/>}/>
                        <Route path='/devices/:_id' element={<DeviceDetails/>}/>
                        <Route path="/order" element={<OrderPage/>}/>
                        <Route path="/search" element={<Search/>}/>
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
