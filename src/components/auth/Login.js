import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import Input from "../input/Input";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/actions/authActions";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const state = useSelector(state => {
        const {auth} = state;
        return {auth}
    });

    const {isAuth} = state.auth;

    return (
        <Container className="contain">
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="authForm">
                    <Input value={email} setValue={setEmail} type="text"
                           placeholder="Введите ваш email..."
                    />
                    <Input value={password} setValue={setPassword} type="password"
                           placeholder="Введите ваш пароль..."
                    />
                    { !isAuth &&
                    <Button
                        className="mt-3 align-self-end" variant={"outline-success"}
                        onClick={() => dispatch(login(email, password))}>
                        Войти
                    </Button>}
                    { !isAuth && <div>
                        Нет аккаунта? <NavLink to="/registration">Зарегестрируйся!</NavLink>
                    </div>}
                </Form>
            </Card>
        </Container>
    )
};

export {Login};
