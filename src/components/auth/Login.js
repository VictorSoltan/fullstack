// import {useState} from "react";
// import {login} from "../../services/axios/auth.service";
// import {Navigate} from "react-router-dom";
// import {Form, Modal} from "react-bootstrap";
//
// const Login = () => {
//     const [values, setValues] = useState({
//         email: '',
//         password: ''
//     });
//
//     const [isSuccess, setSuccess] = useState(false);
//
//     const handleChange = (type) => (e) => {
//         setValues({...values, [type]: e.target.value});
//     }
//
//     const formSubmit = async (e) => {
//         e.preventDefault();
//         const newVar = await login(values);
//
//         if (newVar.access_token) {
//             setSuccess(true);
//         }
//
//         localStorage.setItem('access_token', newVar.access_token);
//         localStorage.setItem('refresh_token', newVar.refresh_token);
//         localStorage.setItem('user', JSON.stringify(newVar.user));
//     }
//     if (isSuccess) {
//         console.log('login is ok');
//         return (
//             <Navigate to="/checkout"/>
//         )
//
//     }
//
//     return (
//         <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Log in</Modal.Title>
//             </Modal.Header>
//
//             <Modal.Body>
//                 <Form>
//                     <Form.Group controlId="fromBasicEmail">
//                         <Form.Label>Email Address</Form.Label>
//                         <Form.Control type="email" placeholder="Enter email"/>
//                         {/*<Form.Text className="text-muted"></Form.Text>*/}
//                     </Form.Group>
//
//                     <Form.Group controlId="fromBasicEmail">
//                         <Form.Label>Email Address</Form.Label>
//                         <Form.Control type="text" placeholder="Enter password"/>
//                         {/*<Form.Text className="text-muted"></Form.Text>*/}
//                     </Form.Group>
//
//                     <Form.Froup controlId="fromBasicCheckBox">
//                         <Form.Check type="checkbox" label="Remember me"/>
//                     </Form.Froup>
//                 </Form>
//             </Modal.Body>
//        <form className="padding">
//            <input type="email"
//                  onChange={handleChange('email')}
//          />
//         {/*    <br/>*/}
//         {/*    <input type="text"*/}
//         {/*           onChange={handleChange('password')}/>*/}
//         {/*    <br/>*/}
//
//         {/*    <input type="submit"*/}
//         {/*           onClick={formSubmit} />*/}
//
//         {/*</form>*/}
//         </Modal>
//
//     )
// }
//
// export {Login};
