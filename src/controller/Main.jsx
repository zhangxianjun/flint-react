import {Container, Col, Row, Stack, Navbar, Nav} from 'react-bootstrap';

export function Main() {
    return (
        <Container fluid>
            <Row>
                <Col lg={2}>

                    <Navbar>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    </Navbar>

                    <div className="bg-light border">
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav>
                    </div>
                </Col>
                <Col lg={10}>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Text>产品</Navbar.Text>
                            <Navbar.Text>开发</Navbar.Text>
                            <Navbar.Text>测试</Navbar.Text>
                            <Navbar.Text>运维</Navbar.Text>
                        </Container>
                    </Navbar>

                    <div className="bg-light border">Body</div>
                </Col>
            </Row>
        </Container>
    );
}