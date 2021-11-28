import React from 'react';
import { Link } from 'react-router-dom';

import '../../sass/404.sass'

const NotFound = () => {
    return (
        <div id="notFound">
            <h2>Greška 404</h2>
            <p>Ups!</p>
            <p>Stranica kojoj Pokušavate da pristupite nije pronađena!</p>
            <div>
                <Link className="btn" to="/">Početna</Link>
                <Link className="btn" to="/products">Proizvodi</Link>
            </div>
        </div>
    );
}

export default NotFound;