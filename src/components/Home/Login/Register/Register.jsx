// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, loading } = useContext(AuthContext)
    const [error, setError] = useState('')

    const navigate = useNavigate()
    if (loading) {
        return (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
    }
    const handleRegister = (event) => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, photo, email, password)
        if ((email, password)) {
            createUser(email, password)
                .then(result => {
                    const createdUser = result.user
                    console.log(createdUser)
                    navigate('/')
                })
                .catch(error => {
                    setError(error.message)
                })
        }

        // validations
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
        event.target.reset()
    }
    return (
        <Container className='w-25 mx-auto my-5'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button type="submit">Sign Up</Button>
                </Form.Group>
                <p><small>Have an account? <Link to='/login'>Login</Link></small></p>
            </Form>
            <p><small className='text-danger'>{error}</small></p>
        </Container>
    );
};

export default Register;