import React from 'react';
import {useForm} from "react-hook-form";
import {postDevice} from "../../services/axios/device.service";
import {useState} from "react";
import logo from './logo.png';
import axios from "axios";

const DeviceForm = () => {
    const {register, handleSubmit} = useForm();
    const [img, setImg] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const mySubmit = async (device) => {
        await postDevice(device);
    };

    const sendFile = React.useCallback(async () => {
        try {
            const data = new FormData()
            data.append('image', img)

            await axios.post('https://urlsession-backend.onrender.com/devices', data, {
                headers: {
                    'content-type': 'mulpipart/form-data'
                }
            })

                .then(res => setAvatar(res.data.path))
        } catch (error) {

        }
    }, [img]);

    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div>Name:<input type="text" {...register('name')}/></div>
            <div>Price:<input type="text" {...register('price')}/></div>
            <div>Rating:<input type="text" {...register('rating')}/></div>
            <div>Type:<input type="text" {...register('type')}/></div>
            <div>Brand:<input type="text" {...register('brand')}/></div>
            <div>Email:<input type="text" {...register('email')}/></div>
            <div className="flex">
                <label htmlFor="file">File</label>
                <input type="file" id="file" accept=".jpg" {...register('image')}/>
            </div>
            <div className="avatar">
                {
                    avatar
                        ? <img className="logo" src={`${avatar}`} alt="avatar"/>
                        : <img className="logo" src={`${logo}`} alt="avatar"/>
                }
            </div>
            <div>
                <input type="file" onChange={e => setImg(e.target.files[0])}/>
                <button className="btn" onClick={sendFile}>Изменить аватар</button>
            </div>
            <button>save</button>
        </form>
    );
};

export {DeviceForm};
