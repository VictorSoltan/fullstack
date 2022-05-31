import {useEffect, useState} from "react";
import {getDevice} from "../../services/axios/device.service";
import Device from "../device/Device";
import Footer from "../footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {DeviceForm} from "../deviceForm/DeviceForm";
import {SearchBar} from "../searchBar/SearchBar";

const Devices = () => {
    const state = useSelector(state => {
        const {device} = state;
        return {device}
    });
    const dispatch = useDispatch();
    const {devices} = state.device;

    const [page, setPage] = useState(1);

    useEffect(() => {
        getDevice(page, 5, 2, 8500).then(value => {
            dispatch({type: "FETCH_DEVICES", payload: value.data});
        });
    }, [page]);

    const paginationHandler = (num) => {
        setPage(page + num);
    };

    const [searchParams, setSearchParams] = useSearchParams();

    const searchTerm = searchParams.get('name') || '';

    const handleSearch = event => {
        const name = event.target.value;
        if (name) {
            setSearchParams({name});
        } else {
            setSearchParams({});
        }
    }

    return (
        <div>
            {/*<DeviceForm/>*/}
            <SearchBar searchTerm={searchTerm} handleSearch={handleSearch}/>

            {
                devices
                    .filter(device => device.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(value => <Device item={value} key={value.id} devices={value}/>)

            }

            <Footer
                totalPages={devices.length}
                page={page}
                paginationHandler={paginationHandler}/>

        </div>
    );
}

export {Devices};

// const orderBy = (devices, price) => {
//     if (price === 'asc') {
//         return [...devices].sort((a, b) => (a.price > b.price ? 1 : -1));
//     }
//     if (price === 'desc') {
//         return [...devices].sort((a, b) => (a.price > b.price ? -1 : 1));
//     }
//     return devices;
// }
