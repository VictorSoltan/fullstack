import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import Input from "../input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/user";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    return (
        <Container className="contain">
            <Card style={{width: 600}} classname="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="authForm">
                    <Input value={email} setValue={setEmail}
                           placeholder="Введите ваш email..."
                    />
                    <Input value={password} setValue={setPassword}
                           placeholder="Введите ваш пароль..."
                    />
                    <Row>
                        <div>
                            Нет аккаунта? <NavLink to="/registration">Зарегестрируйся!</NavLink>
                        </div>
                        <Button
                            className="mt-3 align-self-end" variant={"outline-success"}
                        onClick={() => dispatch(login(email, password))}>
                            Войти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
};

export default Auth;
