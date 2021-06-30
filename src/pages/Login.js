import React, { useRef, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import {useAuth} from '../context/auth_context'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
    return (
        <Wrapper className='page-100'>
            <div>
                <h2 className='text-center mb-4'>Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                            <Button disabled={loading} type='submit' className='w-100 mt-3 '>Log In</Button>
                        </Form.Group>
                   </Form>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.main`
 
  padding: 30px

`