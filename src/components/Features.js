import React from 'react'
import { CardGroup, Card, Container, Row, Col } from 'react-bootstrap'
import data from '../constants/data.json'

const Features = () => {
  return (
    <Container fluid id='features'>
      <h2 className='mt-5 text-center mb-0 pb-0 text-uppercase'>Features</h2>
      <Row>
        <CardGroup className='m-4 p-5 mt-2'>
          <Row
            xs={1}
            md={2}
            lg={4}
            className='g-4 d-flex justify-content-center'
          >
            {data.map(({ title, height, width, src, desc }, index) => {
              return (
                <Col key={index}>
                  <Card border='light'>
                    <Card.Img
                      variant='top'
                      width={width}
                      height={height}
                      src={src}
                    />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </CardGroup>
      </Row>
    </Container>
  )
}

export default Features
