import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './header.jsx';
import Footer from './footer.jsx';

import Home from './pages/home.jsx'
import Products from './pages/products.jsx'
import Cart from './pages/cart.jsx';

import '../sass/layout.sass'

function Layout() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Layout