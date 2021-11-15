import React from 'react';
import { Link } from 'react-router-dom';
import CartSvg from '../img/cart.svg';

import '../sass/header.sass'

export default function Header() {
    return (
        <header>
            <Link className='logo' to='/'>Silver Star</Link>
            <ul>
                <li><Link exact to='/'>Početna</Link></li>
                <li><Link exact to='/#special'>Izdvojeno</Link></li>
                <li><Link exact to='/products'>Proizvodi</Link></li>
                <li><Link exact to='/#contact'>Kontakt</Link></li>
            </ul>
            <Link exact to='/cart'>Korpa<img src={CartSvg} alt='cart'/></Link>
        </header>
    )
}