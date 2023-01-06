import React, {useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {login, registration} from "../../redux/actions/authActions";
import {CartBlock} from "../cartBlock/CartBlock";
import {Container, Navbar, Nav, Modal, Form, Button, Row} from 'react-bootstrap';

import {useDispatch} from "react-redux";
import './Header.css'
import Input from "../input/Input";
// import '../../App.css';

const Header = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nick_name, setNick_name] = useState('');

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

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => {
        setShow2(false)
    };

    const handleShow2 = () => {
        setShow2(true)
    };

    return (
        <>
            <Navbar collapseOnSelect
                    expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        {/*<img src={logo}*/}
                        {/*     height="30"*/}
                        {/*     width="30"*/}
                        {/*     className="d-inline-block align-top"*/}
                        {/*     alt="Logo"/>*/}
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="coloring"/>
                    <Navbar.Collapse className="mrs">
                        <Nav className="mrs">
                            <NavLink className="NavLink"  to="/devices">Devices</NavLink>

                            {isAuthN && <div>
                                <NavLink className="NavLink" to="/logout">Logout</NavLink>
                            </div>}
                            {isAuthN && <NavLink className="NavLink" to="/admin">
                                Admin page
                            </NavLink>}

                        </Nav>
                        <Nav>
                            <Button variant="primary" className="endPoint" onClick={handleShow}>Log in</Button>
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
                            <Nav>
                                <Button variant="primary" className="mr-2" onClick={handleShow2}>Registration</Button>
                            </Nav>
                            <input type="submit"
                                   onClick={formSubmit}/>
                        </Modal.Body>
                    </Modal>}

                    {<Modal show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                            <Modal.Title>Registration</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form>
                                <Input type="text" value={nick_name} setValue={setNick_name}
                                       placeholder="Ім'я"
                                />
                                <Input type="text" value={email} setValue={setEmail}
                                       placeholder="Email"
                                />
                                <Input type="password" value={password} setValue={setPassword}
                                       placeholder="Пароль"
                                />
                                <Row>
                                    <Button
                                        className="mt-3 align-self-end" variant={"outline-success"}
                                        onClick={() => registration(email, password, nick_name)}>
                                        Зареєструватися
                                    </Button>
                                </Row>
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

