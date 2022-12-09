import {Container} from "react-bootstrap";
import {useForm} from "react-hook-form";
// import {postDevice} from "../../services/axios/device.service";
import './Admin.css';
import React, {useState} from "react";
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// const schema = yup.object().shape({
//     files: yup.mixed().test('required', 'Please select a file', value => {
//         return value && value.length;
//     }),
// });

const Admin = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();

        formData.append('image', data.image[0]);

        const res = await fetch('https://urlsession-backend.onrender.com/devices', {
            method: "POST",
            body: formData
        }).then(res => res.json())
        alert(JSON.stringify(res));
    };

    return (
        <div className="mtForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input ref={register} required name="image" type="file"/>
                <input type="text" ref={register} required name="name"/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export {Admin};


// (
//     <Container className="d-flex mt-80">
//         {image ? <img src={image} width="450"/> : null}
//         <form onSubmit={handleSubmit(onSubmit)} className="mtForm">
//             {!watch('files') || watch('files').length === 0 ? (
//                 <input type="file" id="fileUpload" {...register('files')}/>
//             ) : (<strong>{watch('files')[0].name}</strong>)}
//             {/*<div>Name:<input type="text" {...register('name')}/></div>*/}
//             {/*<div>Price:<input type="text" {...register('price')}/></div>*/}
//             {/*<div>Rating:<input type="text" {...register('rating')}/></div>*/}
//             {/*<div>Type:<input type="text" {...register('type')}/></div>*/}
//             {/*<div>Brand:<input type="text" {...register('brand')}/></div>*/}
//             {/*<div>Email:<input type="text" {...register('email')}/></div>*/}
//             {/*<div>*/}
//             {/*    File: <input type="file" id="file" {...register('image')}/>*/}
//             {/*</div>*/}
//             <button type="submit">Submit</button>
//             {errors.file && <div>{errors.files.message}</div>}
//         </form>
//     </Container>
// )
