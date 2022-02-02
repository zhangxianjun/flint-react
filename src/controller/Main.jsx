import {Container, Col, Row, Navbar, Nav} from 'react-bootstrap';

export function Main() {
    return (
        <Container fluid>
            <Row>
                <Col lg={2} className="p-xl-0">
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand className="w-100 text-center" href="#home">React-Bootstrap</Navbar.Brand>
                    </Navbar>
                    <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Active</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col lg={10} className="p-xl-0">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">今日待办</Nav.Link>
                                <Nav.Link href="#features">产品环节</Nav.Link>
                                <Nav.Link href="#pricing">开发环节</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <div className="bg-light border h-100">Body</div>
                </Col>
            </Row>
        </Container>
    );
}