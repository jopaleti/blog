import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Star } from 'react-feather';
import { img2, img5 } from '../Assets';

function Section() {
  return (
    <Container>
        <Row className='jsutify-content-between gy-3 align-items-start'>
            <Col lg={9} className=''>
                <div className="w-100 bg-white pt-4 rounded">
                    <small className="px-2 bg-danger text-white ms-4 fs-5 text-center fw-bold smallText">
                        FOOTBALL
                    </small>
                    <Row className='justify-content-between gx-0 gx-sm-4 gy-2 align-items-start w-100'>
                        <Col lg={8} className='pe-0'>
                            <div className="section__container w-100">
                                <img src={img5} alt="img.jpg" className='w-100 rounded' />
                                <div className="section__container__text py-4 px-3 bg-white text-center">
                                    <h2 className='text-dark fs-6 fw-bold'><a href="/" className="text-decoration-none text-dark">2022 Award for the best student</a></h2>
                                    <small className="text-secondary">20th Feb, 2022</small>
                                    <p className='text-dark'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="d-flex align-items-start gap-2 w-100 column__right mb-2">
                                <img src={img2} alt="img.jpg" />
                                <div>
                                    <small className='text-dark fw-normal fw-bold mb-1'>Machester United start the player</small>
                                    <small className='text-secondary'>Machester United start the player</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={3}>
                <div className='bg-white'>
                    <div className="d-flex align-items-center w-100">
                        <small className="px-4 py-2 bg-danger fw-normal w-50 text-center">LATEST</small>
                        <small className="px-4 py-2 bg-light text-dark fw-normal w-50 text-center">POPULAR</small>
                    </div>
                    <div className="p-2">
                        {/* INFORMATION */}
                        <div className="d-flex align-items-start gap-2 mb-2 section__left__bar">
                            <img src={img2} alt="img.jpg" />
                            <div>
                                <small className='text-dark fw-normal fw-bold mb-1'>Machester United start the player</small>
                                <Star className='' style={{width: '20px', fill: 'red'}} />
                                <Star className='' style={{width: '20px', fill: 'red'}} />
                                <Star className='' style={{width: '20px', fill: 'red'}} />
                                <Star className='' style={{width: '20px', fill: 'red'}} />
                                <Star className='' style={{width: '20px', fill: 'red'}} />
                            </div>
                        </div>
                    </div>
                </div>

            </Col>
        </Row>
    </Container>
  )
}

export default Section