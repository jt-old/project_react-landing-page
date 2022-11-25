import React from 'react'
import { Form, Button, FloatingLabel, Container, Col } from 'react-bootstrap'

export default function Contact() {
  return (
    <Container
      fluid
      className='p-5 bg-image d-flex justify-content-center align-items-center'
      style={{
        backgroundImage:
          "url('https://i.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI')",
        height: 600,
      }}
    >
      <Col></Col>
      <Col>
        <Form id='contact' className='bg-primary p-5 rounded text-dark'>
          <Form.Group className='mb-3' controlId='formEmail'>
            <FloatingLabel
              controlId='floatingInput'
              label='Email address'
              className='mb-3'
            >
              <Form.Control type='email' placeholder='name@example.com' />
            </FloatingLabel>
            <Form.Text className='text-light'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formMessage'>
            <FloatingLabel
              controlId='floatingInput'
              label='Enter message'
              className='mb-3'
            >
              <Form.Control
                as='textarea'
                placeholder='Enter Message'
                rows={10}
              />
            </FloatingLabel>
          </Form.Group>
          <Button variant='dark' type='submit' className=''>
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  )
}
