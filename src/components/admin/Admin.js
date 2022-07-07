import {Container} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {postDevice} from "../../services/axios/device.service";
import './Admin.css';


const Admin = () => {
    const {register, handleSubmit} = useForm();

    const mySubmit = async (device) => {
        await postDevice(device);
    };

    return (
       <Container className="d-flex mt-80">
           <form onSubmit={handleSubmit(mySubmit)} className="mtForm">
               <div>Name:<input type="text" {...register('name')}/></div>
               <div>Price:<input type="text" {...register('price')}/></div>
               <div>Rating:<input type="text" {...register('rating')}/></div>
               <div>Type:<input type="text" {...register('type')}/></div>
               <div>Brand:<input type="text" {...register('brand')}/></div>
               <div>Email:<input type="text" {...register('email')}/></div>
               <button>save</button>
           </form>
       </Container>
    )
}

export {Admin};
