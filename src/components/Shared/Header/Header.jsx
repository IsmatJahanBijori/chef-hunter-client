// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home" className='fw-bold'>Aurora Chef Hunter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto mt-16">
                        <Link className='active' to='/' style={{ textDecoration: 'none', marginRight: '5px' }}>Home</Link>
                        <Link className='active' to='/blog' style={{ textDecoration: 'none', marginRight: '5px' }}>Blog</Link>
                        <Link className='active' to='/chefRecipe' style={{ textDecoration: 'none', marginRight: '5px' }}>Chefs Recipe</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="">Profile</Nav.Link>
                        <Link to='/login'><Button variant="secondary" style={{ textDecoration: 'none', marginRight: '10px' }}>Login</Button></Link>
                        <Link to='/register'><Button variant="secondary" style={{ textDecoration: 'none', marginRight: '10px' }}>Register</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;