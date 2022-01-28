import {Button, Col, Container, Row, Form, Stack} from "react-bootstrap";

export function Login(props) {

    function login() {
        console.log("=========");
    }

    return (
        <Stack gap={2} className="col-md-3 mx-auto">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control size="sm" type="email" placeholder="请输入账号"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control size="sm" type="password" placeholder="请输入密码"/>
                </Form.Group>
            </Form>
            <Button variant="primary" size="sm" onClick={login}>登录</Button>
        </Stack>

    );
}