// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home" className='fw-bold' style={{ fontFamily: 'Manrope', fontSize: '25px' }}>Aurora Chef Hunter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto mt-16">
                        <Link to='/' style={{ textDecoration: 'none', color: 'black', marginRight: '5px', fontFamily: 'Manrope', fontSize: '25px' }}>Home</Link>
                        <Link to='/blog' style={{ textDecoration: 'none', color: 'black', marginRight: '5px', fontFamily: 'Manrope', fontSize: '25px' }}>Blog</Link>
                    </Nav>
                    <Nav>
                        {user ?
                            <div>
                                <Image src="https://i.ibb.co/StStwZQ/action.png" style={{ height: '40px', marginRight: '10px' }} roundedCircle />
                                <Link onClick={handleLogout}><Button variant="secondary" style={{ textDecoration: 'none', marginRight: '10px' }}>LogOut</Button></Link>
                            </div> :
                            <div>
                                <Link to='/login'><Button variant="secondary" style={{ textDecoration: 'none', marginRight: '10px' }}>Login</Button></Link>
                                <Link to='/register'><Button variant="secondary" style={{ textDecoration: 'none', marginRight: '10px' }}>Register</Button></Link>
                            </div>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};
export default Header;
// className="mx-auto mt-16" style={{ fontFamily: 'Manrope', fontSize: '25px' }}  nav
// style={{ textDecoration: 'none', marginRight: '5px' }  link

{/**
<nav className="mx-auto mt-16" style={{ fontFamily: 'Manrope', fontSize: '25px' }}>
                        <Link to='/' className='active' style={{ textDecoration: 'none', marginRight: '5px' }}>Home</Link>
                        <Link to='/blog' className='active' style={{ textDecoration: 'none', marginRight: '5px' }}>Blog</Link>
                        <Link to='/chefRecipe' className='active' style={{ textDecoration: 'none', marginRight: '5px' }}>Chef Recipe</Link>
                    </nav> */}