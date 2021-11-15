import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './header.jsx';
import Footer from './footer.jsx';

import Home from './pages/home.jsx'
import Products from './pages/products.jsx'
import Cart from './pages/cart.jsx';

function Layout() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Layout