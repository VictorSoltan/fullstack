import {useEffect, useState} from "react";
import {getDevice} from "../../services/device.service";
import Device from "../device/Device";
import Footer from "../footer/Footer";
import {useDispatch, useSelector} from "react-redux";

export default function Devices() {

    const state = useSelector(state => {
        const {device, filter} = state;
        return {device, filter}
    })
    const dispatch = useDispatch();

    const {devices, name} = state.device;

    const [page, setPage] = useState(1);

    useEffect(() => {
        getDevice(page, 5, 2, 8500, "mob").then(value => {
            dispatch({type: "FETCH_DEVICES", payload: value.data});
        });
    }, [page, name]);

    // const orderBy = (devices, price) => {
    //     if (price === 'asc') {
    //         return [...devices].sort((a, b) => (a.price > b.price ? 1 : -1));
    //     }
    //     if (price === 'desc') {
    //         return [...devices].sort((a, b) => (a.price > b.price ? -1 : 1));
    //     }
    //     return devices;
    // }

    const paginationHandler = (num) => {
        setPage(page + num);
    };

    const findDevices = (name) => {
        dispatch({type: "SEARCH_DEVICE", payload: name});
    }

    return (
        <div>
            <div className="search">
                <div>
                    <input className="searcher" placeholder="Я ищу сегодня..."
                           onChange={findDevices}/>
                    <button className="searchButton" onClick={findDevices}>Find device</button>
                </div>
            </div>

            {
                devices.map(value => <Device item={value} key={value.id}/>)
            }

            <Footer
                totalPages={devices.length}
                page={page}
                paginationHandler={paginationHandler}/>

        </div>
    );

}

