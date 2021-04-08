import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Container>
                <Navbar className="mt-2" bg="light" expand="lg">
                    <Navbar.Brand href="home">Fire Authentication</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="login">Log In</Nav.Link>
                            <Nav.Link href="registration">Registration</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;