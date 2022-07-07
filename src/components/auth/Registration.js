import {Button, Card, Container, Row} from "react-bootstrap";
import './Authorization.css';
import React, {useState} from "react";
import Input from "../input/Input";
import {registration} from "../../redux/actions/authActions";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container className="registration padding">
            <Card className="card">
                <div className="registration_header">Регистрация</div>
                <Input type="text" value={email} setValue={setEmail}
                       placeholder="Введите ваш email..."
                />
                <Input type="password" value={password} setValue={setPassword}
                       placeholder="Введите ваш пароль..."
                />
                <Row>
                    <Button
                        className="mt-3 align-self-end" variant={"outline-success"}
                        onClick={() => registration(email, password)}>
                        Войти
                    </Button>
                </Row>
            </Card>
        </Container>
    )
};

export {Registration};
