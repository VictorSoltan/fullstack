import {Button, Card, Container, Form, Row} from "react-bootstrap";
import './Authorization.css';
import {useState} from "react";
import Input from "../input/Input";
import {registration} from "../../redux/actions/user";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    return (
        <Container className="contain">
            <Card style={{width: 600}} classname="p-5">
                <h2 className="m-auto">Регистрация</h2>
                <Form className="authForm">
                    <Input value={email} setValue={setEmail}
                        placeholder="Введите ваш email..."
                    />
                    <Input value={password} setValue={setPassword}
                        placeholder="Введите ваш пароль..."
                    />
                    <Row>
                        <Button
                            className="mt-3 align-self-end" variant={"outline-success"}
                            onClick={()=> registration(email, password)}>
                            Войти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
};

export default Registration;
