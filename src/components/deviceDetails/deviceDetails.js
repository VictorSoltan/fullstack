import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {getDeviceById} from "../../services/axios/device.service";

const DeviceDetails = () => {
    const {_id} = useParams();
    const [deviceDetails, setDeviceDetails] = useState(null);

    useEffect(() => {
        getDeviceById(_id)
            .then(value => setDeviceDetails(value.data));
    }, [_id]);

    return (
        <div>
            {
                deviceDetails && (
                    <>
                        <h1>{deviceDetails.name}</h1>
                        <p>{deviceDetails.price}</p>
                        <p>{deviceDetails.brand}</p>
                        <p>{deviceDetails.type}</p>
                    </>
                )
            }
        </div>
    );
}

export {DeviceDetails};
