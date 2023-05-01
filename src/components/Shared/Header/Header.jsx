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
                <Navbar.Brand href="#home" className='fw-bold'>Aurora Chef Hunter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto mt-16">
                        <Link className='active' to='/' style={{ textDecoration: 'none', marginRight: '5px' }}>Home</Link>
                        <Link className='active' to='/blog' style={{ textDecoration: 'none', marginRight: '5px' }}>Blog</Link>
                        <Link className='active' to='/chefRecipe' style={{ textDecoration: 'none', marginRight: '5px' }}>Chefs Recipe</Link>
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
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/StStwZQ/action.png" alt="action" border="0"></a>
export default Header;