import React from 'react';
import {Container, Form, InputGroup, FormControl} from 'react-bootstrap';
import { Facebook, Linkedin, Mail, Search, Twitter } from 'react-feather';

function Navbar() {
  return (
    <Container>
        <div className="navbar__header d-flex justify-content-between py-3">
            <small className='navTop'>20 August. Thursday 2015. 2:00 PM. </small>
            <small className='navTop'><a href="/" className="text-decoration-none text-white">LOGIN</a> / <a href="/" className="text-decoration-none text-white">REGISTER</a></small>
        </div>
        <div className="navbar__second d-flex justify-content-between">
            <div className="navbar__second__left d-flex align-items-center justify-content-between">
                <h4 className='mt-1 nav__day'>Daily<span className="text-danger">Track</span></h4>
                <div className='ms-4 bar__search' style={{height: '35px'}}>
                    <Form action="#" style={{height: '100%'}}>
                        <InputGroup className="mb-3 h-100 border-0">
                            <FormControl style={{width: '', outline: 'none'}}
                            className='border-end-0 text-secondary border-0 h-100'
                            placeholder="Search..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                            <InputGroup.Text id="basic-addon1" className='bg-white border-0 h-100'><Search style={{width: '15px', color: 'grey'}} /></InputGroup.Text>
                        </InputGroup>
                    </Form>
                </div>
            </div>
            {/* Follow Page */}
            <div className="d-flex align-items-center">
                <div className="py-1 px-2 me-sm-3 me-2 bg-danger text-center border-1 border-white">
                    <Facebook className='navTop__icon' style={{width: '20px', stroke: 'black', fill: '#fff'}} />
                </div>
                <div className="py-1 px-2 me-sm-3 me-2 bg-danger text-center border-1 border-white">
                    <Linkedin className='navTop__icon' style={{width: '20px', stroke: 'black', fill: '#fff'}} />
                </div>
                <div className="py-1 px-2 me-sm-3 me-2 bg-danger text-center border-1 border-white">
                    <Mail className='navTop__icon' style={{width: '20px', stroke: 'black', fill: '#fff'}}/>
                </div>
                <div className="py-1 px-2 me-sm-3 me-2 bg-danger text-center border-1 border-white">
                    <Twitter className='navTop__icon' style={{width: '20px', stroke: 'black', fill: '#fff'}}/>
                </div>
                
            </div>
        </div>
        <div className="navbar__last mt-4">
            <h3><a href="/" className="text-decoration-none text-white me-3">Sport</a></h3>
            <h3><a href="/" className="text-decoration-none text-white me-3">Cars</a></h3>
            <h3><a href="/" className="text-decoration-none text-white me-3">New Brands</a></h3>
            <h3><a href="/" className="text-decoration-none text-white me-3">Compare</a></h3>
            <h3><a href="/" className="text-decoration-none text-white me-3">Join us</a></h3>
            <h3 className='search__icon'><Search style={{width: '18px'}} /></h3>
        </div>
    </Container>
  )
}

export default Navbar