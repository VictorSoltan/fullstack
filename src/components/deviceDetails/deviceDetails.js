import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {getDeviceById} from "../../services/axios/device.service";
import '../products/Products.css';

const DeviceDetails = () => {
    const {_id} = useParams();
    const [deviceDetails, setDeviceDetails] = useState(null);

    // const InfoContainer = styled.div`
    //   flex: 1;
    //   padding: 0px 50px;
    //   ${mobile({padding: '10px'})}
    // `;
    //
    // const Title = styled.h1`
    //   font-weight: 200;
    // `;
    //
    // const Desc = styled.p`
    //   margin: 20px 0px;
    // `;
    // const Wrapper = styled.div`
    //   padding: 50px;
    //   display: flex;
    //   ${mobile({padding: '10px', flexDirection: 'column'})}
    // `;

    useEffect(() => {
        getDeviceById(_id)
            .then(value => setDeviceDetails(value.data));
    }, [_id]);

    return (
        <div className="classForDetailsDevice">
            {
                deviceDetails && (
                    <>
                        <h1>{deviceDetails.name}</h1>
                        <p>{deviceDetails.price}</p>
                        <p>{deviceDetails.brand}</p>
                        <p>{deviceDetails.type}</p>
                       <div> {deviceDetails.image} </div>
                    </>
                )
            }
        </div>
    );
}

export {DeviceDetails};
