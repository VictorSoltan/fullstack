import {useEffect, useState} from "react";
import {getDevice} from "../../services/device.service";
import Device from "../device/Device";

export default function Devices() {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        getDevice().then(value => setDevices([...value]));
    }, []);

    return (

            devices.map(value => <Device key={value._id} item={value}/>)

    );
}
