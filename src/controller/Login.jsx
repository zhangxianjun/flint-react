import {Button, Col, Container, Row, Form} from "react-bootstrap";

export function Login(props) {

    function login() {
        console.log("=========");
    }

    return (
        <Container className='p-5 bg-light rounded-3 justify-content-md-center'>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control size="sm" type="email" placeholder="请输入账号"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control size="sm" type="password" placeholder="请输入密码"/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col xs lg={2}>
                    <Button variant="primary" onClick={login}>登录</Button>
                </Col>
            </Row>
        </Container>
    );
}