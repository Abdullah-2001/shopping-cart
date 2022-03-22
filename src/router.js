import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './cart';
import Items from './items';

const RouterApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Items />} />
                <Route path="/items" element={<Cart />} />
            </Routes>
        </Router>
    )
}

export default RouterApp;