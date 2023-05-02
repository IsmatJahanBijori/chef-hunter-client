// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    const { signIn, googleUser, githubUser, loading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    if (loading) {
        return (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
    }
    const handleSignInUser = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        // email, password

        signIn(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })


        event.target.reset()

    }

    const googleSignIn = () => {
        // google
        // eslint-disable-next-line no-undef
        googleUser()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const githubSignIn = () => {
        githubUser()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <Container className='w-25 mx-auto mt-5'>
            <Form onSubmit={handleSignInUser}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button type="submit">Sign in</Button>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Button type="submit" onClick={googleSignIn}><FaGoogle className='me-2 text-danger' />Google Sign in</Button>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button type="submit" className='btn btn-secondary' onClick={githubSignIn}><FaGithub className='me-2' />Github Sign in</Button>
                </Form.Group>
                <p><small>No account? <Link to='/register'>Register</Link></small></p>
            </Form>
            <p><small className='text-danger'>{error}</small></p>
        </Container>
    );
};

export default Login;

{/**
if ((email, password)) {
            signIn(email, password)
                .then(result => {
                    const createdUser = result.user
                    console.log(createdUser)
                    navigate('/')
                })
                .catch(error => {
                    setError(error.message)
                })
        } */}