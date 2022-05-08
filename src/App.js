import Users from "./components/users/Users";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import {Layout} from "./components/Layot/Layot";
import Devices from "./components/devices/Devices";
import Auth from "./components/auth/Auth";
import Basket from "./components/basket/Basket";

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="auth" element={<Auth/>}/>
                        <Route path="devices" element={<Devices/>}/>
                        <Route path="shop" element={<Shop/>}/>
                        <Route path="users" element={<Users/>}/>
                        <Route path="basket" element={<Basket/>}/>
                    </Route>
                </Routes>
            </Router>
        </>
    );
}
