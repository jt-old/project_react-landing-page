import { Container, Card, Button, Col, Row } from 'react-bootstrap'

const Cta = () => (
  <Container fluid className="py-5">
    <Card className="text-center text-light m-5" bg="primary" border="light">
      <Card.Body>
        <Row className="p-5 m-4">
          <Col>
            <Card.Title className="fs-2">Call to action! It's time!</Card.Title>
            <Card.Text className="fs-5">
              Sign up for our product by clicking that button right over there!
            </Card.Text>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Button variant="dark" className="fs-5 py-2 px-4">
              Sign Up
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Container>
)

export default Cta
