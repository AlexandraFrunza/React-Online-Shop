import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import {useAuth} from '../context/auth_context'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
    return (
        <Wrapper className='page-100 '>
                <h2 className='text-center mb-4'>Sign up</h2>
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
                            <Form.Label>
                                Password Confirmation
                            </Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required />
                            <Button disabled={loading} type='submit' className='w-100 mt-3'>Submit</Button> 
                        </Form.Group>
                   </Form>
            <div className='w-100 text-center mt-2'>
                Already have an account? <Link to='/login'>Log in</Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.main`
  padding: 30px

`