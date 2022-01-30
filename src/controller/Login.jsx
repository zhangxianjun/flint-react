import {Button, Col, Container, Row, Form, Stack, Card} from "react-bootstrap";

export function Login(props) {

    function login() {
        console.log("=========");
    }

    return (
        <Container className="vw-100 vh-100">
            <Row className="h-100">
                <Col className="align-self-center">
                    <Card className="col-xl-3 bg-light mx-xl-auto border-0">
                        <Form className="col-xl-10 mx-xl-auto mt-xl-4 text-center">
                            <Form.Label className="mb-xl-3">Flint Admin</Form.Label>
                            <Form.Control className="mb-xl-3" type="email" placeholder="请输入账号"/>
                            <Form.Control className="mb-xl-3" type="password" placeholder="请输入密码"/>
                        </Form>
                        <Button className="col-xl-10 mb-xl-4 mx-xl-auto" variant="primary" onClick={login}>登录</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}