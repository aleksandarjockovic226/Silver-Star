import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CartSvg from '../img/cart.svg';

import '../sass/header.sass'

export default function Header() {
    return (
        <header>
            <nav>
                <HashLink className='logo' to='/#top'>Silver Star</HashLink>
                <ul>
                    <li><HashLink to='/#top'>Početna</HashLink></li>
                    <li><HashLink to='/#special'>Izdvojeno</HashLink></li>
                    <li><Link to='/products'>Proizvodi</Link></li>
                    <li><HashLink to='/#contact'>Kontakt</HashLink></li>
                </ul>
                <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            </nav>
            <Link className="cartLink" to='/cart'>Korpa<img src={CartSvg} alt='cart' /></Link>
        </header>
    )
}