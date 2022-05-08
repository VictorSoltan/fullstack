import './Authorization.css';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Registration from "./Registration";

const Auth = () => {
    return (
        <Container className="contain">
            <Card style={{width: 600}} classname="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="authForm">
                    <Form.Control
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        placeholder="Введите ваш пароль..."
                    />
                    <Row>
                        <div>
                            Нет аккаунта? <NavLink to={Registration}>Зарегестрируйся!</NavLink>
                        </div>
                        <Button
                            className="mt-3 align-self-end" variant={"outline-success"}>
                            Войти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
};

export default Auth;
