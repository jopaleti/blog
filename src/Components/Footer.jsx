import React from 'react';
import {Container, Row, Col, Form, Button, FloatingLabel} from 'react-bootstrap';

function Footer() {
  return (
    <Container>
        <Row xs={1} sm={2} md={4} className='align-items-start justify-content-between gy-3'>
            <Col>
               <div className="footer__text__container w-100">
                <h3 className='text-white'>Daily<span className="text-danger">Track</span></h3>
                <p>We publish genuine and current varieties of news everytime. Our aim is to keep every one updated on current event happening all around the world.</p>
               </div>
            </Col>
            <Col>
                <div className="footer__getAccess w-100">
                    <h3 className='text-primary'>Get Access</h3>
                    <p className='mb-0'>We allow developers to have access to our API with just a token amount. We are trust worthy.</p>
                    <p className='pb-2'>Eplore our api here.....</p>
                    <a href="#" className="text-decoration-none bg-danger p-2 text-white">Access Api</a>
                </div>
            </Col>
            <Col>
                <div className="footer__getAccess w-100 text-start">
                    <h3 className='text-white'>Category</h3>
                    <a href="#" className="text-decoration-none"><p className='pb-2 mb-1'>Car brands...</p></a>
                    <a href="#" className="text-decoration-none"><p className='pb-2 mb-1'>Education</p></a>
                    <a href="#" className="text-decoration-none"><p className='pb-2 mb-1'>Sport</p></a>
                    <a href="#" className="text-decoration-none"><p className='pb-2 mb-1'>Crime</p></a>
                </div>
            </Col>
            <Col>
                <div className="footer__getAccess w-100">
                    <h3 className='text-white'>Subscribe</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <div className="d-flex align-items-start gap-md-2 flex-md-column">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="text-dark"
                                    style={{height: '50px'}}
                                >
                                    <Form.Control type="email" placeholder="name@example.com" style={{ borderRadius: '0'}} className='h-100'/>
                                </FloatingLabel>
                                <Button variant="primary" type="submit" style={{height: '50px', borderRadius: '0'}}>
                                    Submit
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer