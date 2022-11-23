import React from 'react'
import {
  Envelope,
  Facebook,
  Google,
  House,
  Instagram,
  Linkedin,
  Printer,
  Telephone,
  Twitter,
} from 'react-bootstrap-icons'
import { Container, Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 mx-2 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Connect with us:</span>
        </div>

        <div>
          <a href='!#' rel='noreferrer' className='me-4 text-reset'>
            <Facebook />
          </a>
          <a href='!#' rel='noreferrer' className='me-4 text-reset'>
            <Twitter />
          </a>
          <a href='!#' rel='noreferrer' className='me-4 text-reset'>
            <Google />
          </a>
          <a href='!#' rel='noreferrer' className='me-4 text-reset'>
            <Instagram />
          </a>
          <a href='!#' rel='noreferrer' className='me-4 text-reset'>
            <Linkedin />
          </a>
        </div>
      </section>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Company name</h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </Col>

            <Col md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </Col>

            <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </Col>

            <Col md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                {/* <MDBIcon color='secondary' icon='home' className='me-2' /> */}
                <House /> New York, NY 10012, US
              </p>
              <p>
                {/* <MDBIcon color='secondary' icon='envelope' className='me-3' /> */}
                <Envelope /> info@example.com
              </p>
              <p>
                {/* <MDBIcon color='secondary' icon='phone' className='me-3' /> */}
                <Telephone /> + 555 555 5555
              </p>
              <p>
                {/* <MDBIcon color='secondary' icon='print' className='me-3' /> */}
                <Printer /> + 555 555 5555
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className='text-center p-4'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='1#' rel='noreferrer'>
          misfitDodo Media
        </a>
      </div>
    </footer>
  )
}

export default Footer
