import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div id="404">
            <h2>404</h2>
            <h2>Ups</h2>
            <p>Stranica koju Pokušavate da posetite nije pronađena!</p>
            <Link to="/">Početna</Link>
        </div>
    );
}

export default NotFound;