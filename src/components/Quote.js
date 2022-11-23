import React from 'react'
import { Card, Container } from 'react-bootstrap'

export default function Quote() {
  return (
    <div>
      {' '}
      <Card
        bg='secondary'
        className='quote-container text-light d-flex align-items-center justify-content-center'
      >
        <Container className='p-3 m-3'>
          <Card.Body>
            <blockquote className='blockquote mb-0'>
              <p className='fs-1 fst-italic'>
                {' '}
                This is an inspiring quote, or a testimonial from a customer.
                Maybe it's just filling up space, or maybe people will actually
                read it. Who knows? All I know is that it looks nice.{' '}
              </p>
              <footer className='blockquote-footer text-light pt-2 fs-4'>
                -Thor, God of Thunder
              </footer>
            </blockquote>
          </Card.Body>
        </Container>
      </Card>
    </div>
  )
}
