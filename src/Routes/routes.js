import React from 'react';
import { Home } from "../Pages";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const routes = (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    </Router>
)

export default routes