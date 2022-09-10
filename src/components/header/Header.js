import React, {useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {login, registration} from "../../redux/actions/authActions";
import {CartBlock} from "../cartBlock/CartBlock";
import {Container, Navbar, Nav, Modal, Form, Button} from 'react-bootstrap';
import logo from '../typeBar/222.png';
import {useDispatch} from "react-redux";
// import '../../App.css';

const Header = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const handleChange = (type) => (e) => {
        setValues({...values, [type]: e.target.value});
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        dispatch(login(values));
    };

    const isAuthN = localStorage.getItem('access_token');

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };

    const handleShow = () => {
        setShow(true)
    };

    return (
        <>
            <Navbar collapseOnSelect
                    expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo}
                             height="30"
                             width="30"
                             className="d-inline-block align-top"
                             alt="Logo"/>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="coloring"/>
                    <Navbar.Collapse>
                        <Nav className="mrs">
                            <NavLink to="/devices">Devices</NavLink>
                            <NavLink to="/users">Users</NavLink>
                            {!isAuthN && <NavLink to="/auth">Login</NavLink>}
                             <NavLink to="/registration">Registration</NavLink>
                            {isAuthN && <div>
                                <NavLink to="/logout">Logout</NavLink>
                            </div>}
                            {isAuthN && <NavLink to="/admin">
                                Admin page
                            </NavLink>}
                        </Nav>
                        <Nav>
                            <Button variant="primary" className="mr-2" onClick={handleShow}>Log in</Button>
                        </Nav>
                    </Navbar.Collapse>

                    {<Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Log in</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="fromBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"
                                                  onChange={handleChange('email')}/>
                                </Form.Group>

                                <Form.Group controlId="fromBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" placeholder="Enter password"
                                                  onChange={handleChange('password')}/>
                                    {/*<Form.Text className="text-muted"></Form.Text>*/}
                                </Form.Group>

                                <Form.Group controlId="fromBasicCheckBox">
                                    <Form.Check type="checkbox" label="Remember me"/>
                                </Form.Group>
                            </Form>

                            <input type="submit"
                                   onClick={formSubmit}/>
                        </Modal.Body>
                    </Modal>}

                    <div className="wrapper header_cart-btn-wrapper">
                        <CartBlock/>
                    </div>
                </Container>
                <Outlet/>
            </Navbar>
        </>
    )
}

export default Header;

