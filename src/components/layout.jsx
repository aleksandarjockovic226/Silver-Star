import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './header.jsx';
import Footer from './footer.jsx';

import Home from './pages/home.jsx'
import Products from './pages/products.jsx'
import Cart from './pages/cart.jsx';

import '../sass/layout.sass'

function Layout() {

    const localStorageCart = JSON.parse(localStorage.getItem("Cart") || "[]")


    const [inCart, setInCart] = useState(localStorageCart)

    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(inCart));
    }, [inCart])

    const onAddToCart = (product) => {
        const exist = inCart.find((item) => item.key === product.key);
        if (exist) {
            setInCart(inCart.map((item) => item.key === product.key ? { ...exist, quantity: exist.quantity + 1 } : item))
            localStorage.setItem("Cart", JSON.stringify(inCart));
        } else {
            setInCart([...inCart, { ...product, quantity: 1 }])
            localStorage.setItem("Cart", JSON.stringify(inCart));
        }
    }
    const onRemoveFromCart = (product) => {
        const exist = inCart.find((item) => item.key === product.key);
        if (exist.quantity === 1) {
            setInCart(inCart.filter((item) => item.key !== product.key))
            localStorage.setItem("Cart", JSON.stringify(inCart));
        } else {
            setInCart(inCart.map((item) => item.key === product.key ? { ...exist, quantity: exist.quantity - 1 } : item))
            localStorage.setItem("Cart", JSON.stringify(inCart));
        }
    }
    const onRemoveItem = (product) => {
        setInCart(inCart.filter((item) => item.key !== product.key))
        localStorage.setItem("Cart", JSON.stringify(inCart));
    }
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header numberOfItemsInCart={inCart.length} />
                <Routes>
                    <Route path='/' element={<Home onAddToCart={onAddToCart} />} />
                    <Route path='/products' element={<Products onAddToCart={onAddToCart} />} />
                    <Route path='/cart' element={<Cart
                        inCart={inCart}
                        onRemoveFromCart={onRemoveFromCart}
                        onAddToCart={onAddToCart}
                        onRemoveItem={onRemoveItem}
                    />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Layout