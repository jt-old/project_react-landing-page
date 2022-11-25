import React from 'react'
import { Form, Button, FloatingLabel, Container } from 'react-bootstrap'

export default function Contact() {
  return (
    <div>
      <Container>
        <Form id='contact'>
          <Form.Group className='mb-3' controlId='formEmail'>
            <FloatingLabel
              controlId='floatingInput'
              label='Email address'
              className='mb-3'
            >
              <Form.Control type='email' placeholder='name@example.com' />
            </FloatingLabel>
            <Form.Text className='text-muted'>
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
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}
