import React from 'react';
import {Row, Col, Carousel, Container } from 'react-bootstrap';
import { img1, img2, img3 } from '../Assets';

function Main() {
  return (
    <Container>
        <div className="main mt-4">
            <Row className='justify-content-between gy-4 align-items-center h-100'>
                <Col md={12} lg={9}>
                    <Row className='gy-3'>
                        <Col md={8}>
                            <div className="carousel__cont">
                                <Carousel className='h-100'>
                                    <Carousel.Item className='h-100'>
                                        <img style={{objectFit: 'center', objectPosition: 'center'}}
                                        className="d-block w-100 h-100"
                                        src={img1}
                                        alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        <h3><a href="/" className="text-decoration-none text-dark">Track Robot the Real Tracker</a></h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item className='h-100'>
                                        <img style={{objectFit: 'center', objectPosition: 'center'}}
                                        className="d-block w-100 h-100"
                                        src={img1}
                                        alt="Second slide"
                                        />

                                        <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item className='h-100'>
                                        <img style={{objectFit: 'center', objectPosition: 'center'}}
                                        className="d-block w-100 h-100"
                                        src={img1}
                                        alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="w-100 main__right">
                                <img src={img2} alt="img.jpg" />
                                <div className="main__right__text px-2 py-4 bg-white text-center">
                                    <h3><a href="/" className="text-decoration-none text-dark">Track Robot the Real Tracker</a></h3>
                                    <small className='text-secondary'>20th Jan. 2022</small>
                                    <h5 className='text-dark' style={{fontSize: '12px', lineHeight: '1.3'}}>We wish you happy new year in advance</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={12} lg={3}>
                    <div className="w-100 main__right">
                        <img src={img3} alt="img.jpg" />
                        <div className="main__right__text px-2 py-4 bg-white text-center">
                            <h3><a href="/" className="text-decoration-none text-dark">Track Robot the Real Tracker</a></h3>
                            <small className='text-secondary'>20th Jan. 2022</small>
                            <h5 className='text-dark' style={{fontSize: '12px', lineHeight: '1.3'}}>We wish you happy new year in advance</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default Main