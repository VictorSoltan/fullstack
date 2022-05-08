import {useEffect, useState} from "react";
import {getDevice} from "../../services/device.service";
import Device from "../device/Device";
import Footer from "../footer/Footer";
import {useDispatch, useSelector} from "react-redux";

export default function Devices() {
    let state = useSelector(state => {
            const {device, filter} = state;
            return {device, filter}
        }
    );
    let dispatch = useDispatch();
    let {devices, name} = state;

    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getDevice(page, 6, 2, 8500, name).then(value => {
            dispatch({type: "FETCH_DEVICES", payload: value.data});
            dispatch({type: "SEARCH_DEVICE", payload: value.name});
            console.log(value.name);
            setCount(state.count)
        });
    }, [page]);

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

    const onFindDevices = (event) => {
        return event.target.value;
    }

    const findDevices = devices.filter(device => {
        return device.name.includes(onFindDevices);
    })

    return (
        <div>

            <div className="search">
                <div>
                    <input className="searcher" placeholder="Я ищу сегодня..."
                           onChange={onFindDevices}/>
                    <button className="searchButton" onClick={onFindDevices}>Find device</button>
                </div>
            </div>

            {
                findDevices.map(value => <Device item={value} key={value.id}/>)
            }


            <Footer page={page} paginationHandler={paginationHandler}/>

        </div>
    );

}

