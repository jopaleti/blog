import React from 'react';
import { Navbar, Main, Section, Last, Footer } from '../Components';

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Main />
        <div className="section mt-4">
            <Section />
        </div>
        <div className="last my-3">
            <Last />
        </div>
        <div className="footer mt-3">
            <Footer />
        </div>
    </div>
  )
}

export default Home