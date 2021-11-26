import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Home from './pages/home.jsx'
import Products from './pages/products.jsx'
import Cart from './pages/cart.jsx';
import '../sass/layout.sass'

function Layout() {
    // use local storage if already exist
    const localStorageCart = JSON.parse(localStorage.getItem("Cart") || "[]")
    //cart
    const [inCart, setInCart] = useState(localStorageCart)
    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(inCart));
    }, [inCart])
    // add product to cart
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
    //  decrease number of item quantity in cart
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
    // remove item from cart
    const onRemoveItem = (product) => {
        setInCart(inCart.filter((item) => item.key !== product.key))
        localStorage.setItem("Cart", JSON.stringify(inCart));
    }
    // toggle mobile nav
    const [toggleNavSwitch, setToggleNavSwitch] = useState(false);
    const toggleNav = () => {
        toggleNavSwitch ? setToggleNavSwitch(false) : setToggleNavSwitch(true)
    }
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header
                    numberOfItemsInCart={inCart.length}
                    toggleNav={toggleNav}
                    toggleNavSwitch={toggleNavSwitch}
                />
                <Routes>
                    <Route path='/' element={<Home onAddToCart={onAddToCart} />} />
                    <Route path='/products' element={<Products onAddToCart={onAddToCart} />} />
                    <Route path='/cart' element={<Cart
                        inCart={inCart}
                        onRemoveFromCart={onRemoveFromCart}
                        onAddToCart={onAddToCart}
                        onRemoveItem={onRemoveItem}
                        toggleNav={toggleNav}
                    />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Layout