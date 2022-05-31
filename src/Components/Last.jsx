import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import { Clock } from 'react-feather';
import {img3} from '../Assets'

function Last() {
  return (
    <Container>
        <Row className='justify-content-between align-items-start'>
            <Col lg={9}>
                <Row xs={1} sm={2} lg={3} className='align-items-center w-100'>
                    <Col className='pe-0 mb-2'>
                        <div className="blog__list w-100">
                            <a href="#">
                                <img src={img3} className='w-100 blog__image' alt="img.jpg" />
                            </a>
                            <div className="pt-1">
                                <h3><a href="#" className="text-decoration-none text-white">Nancy Pelosi's husband arrested for drink-driving</a></h3>
                                <p className='text-secondary mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ut. Lorem ipsum dolor sit amet.</p>
                                <div className="d-flex pt-0 align-items-center">
                    
                                    <a href="#" className="text-decoration-none text-white">
                                        <Clock style={{width: '14px', stroke: '#fff'}} />
                                        <small className='text-white ms-2'>US & CANADA</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='pe-0 mb-2'>
                        <div className="blog__list w-100">
                            <a href="#">
                                <img src={img3} className='w-100 blog__image' alt="img.jpg" />
                            </a>
                            <div className="pt-1">
                                <h3><a href="#" className="text-decoration-none text-white">Nancy Pelosi's husband arrested for drink-driving</a></h3>
                                <p className='text-secondary mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ut. Lorem ipsum dolor sit amet.</p>
                                <div className="d-flex pt-0 align-items-center">
                    
                                    <a href="#" className="text-decoration-none text-white">
                                        <Clock style={{width: '14px', stroke: '#fff'}} />
                                        <small className='text-white ms-2'>US & CANADA</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Col>
            <Col lg={3}></Col>
        </Row>
    </Container>
  )
}

export default Last