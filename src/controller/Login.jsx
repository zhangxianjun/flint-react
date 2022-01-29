import {Button, Col, Container, Row, Form, Stack, Card} from "react-bootstrap";

export function Login(props) {

    function login() {
        console.log("=========");
    }

    return (
        <Card className="col-xl-3 bg-light mx-xl-auto my-xl-5">
            <Form className="col-xl-10 mx-xl-auto mt-xl-4">
                <Form.Label className="mb-xl-3 ">Flint Admin</Form.Label>
                <Form.Control className="mb-xl-3" size="sm" type="email" placeholder="请输入账号"/>
                <Form.Control className="mb-xl-3" size="sm" type="password" placeholder="请输入密码"/>
            </Form>
            <Button className="col-xl-10 mb-xl-4 mx-xl-auto" variant="primary" size="sm" onClick={login}>登录</Button>
        </Card>

        // <Stack gap={2} className="col-xl-2 m-xl-auto">
        //
        // </Stack>

    );
}