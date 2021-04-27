import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo1 from '../../images/logo1.png'
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img className='logo' src={logo1} alt="logo.." />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
                        <Nav.Link className='nav-link' href="#link">About me</Nav.Link>
                        <Nav.Link className='nav-link' href="#home">Services</Nav.Link>
                        <Nav.Link className='nav-link' href="#link">How work</Nav.Link>
                        <Nav.Link className='nav-link' href="#home">Portfolio</Nav.Link>
                        <Nav.Link className='nav-link' href="#link">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;