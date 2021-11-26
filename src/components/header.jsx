import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CartSvg from '../img/cart.svg';
import '../sass/header.sass'

export default function Header(props) {
    const { numberOfItemsInCart, toggleNav, toggleNavSwitch } = props
    return (
        <header>
            <nav>
                <HashLink className='logo' to='/#top'>Silver Star</HashLink>
                <ul className={toggleNavSwitch ? "" : "hidden"}>
                    <li><HashLink smooth onClick={toggleNav} to='/#top'>Početna</HashLink></li>
                    <li><HashLink smooth onClick={toggleNav} to='/#special'>Izdvojeno</HashLink></li>
                    <li><Link onClick={toggleNav} to='/products'>Proizvodi</Link></li>
                    <li><HashLink smooth onClick={toggleNav} to='/#contact'>Kontakt</HashLink></li>
                </ul>
                <div onClick={toggleNav} className={toggleNavSwitch ? "burger burgerTransform" : "burger"}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            <Link className="cartLink" to='/cart'>Korpa{numberOfItemsInCart ? (<div className="numberOfItems">{numberOfItemsInCart}</div>) : ''} <img src={CartSvg} alt='cart' /></Link>
        </header>
    )
}