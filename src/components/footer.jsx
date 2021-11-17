import React from 'react';

import '../sass/footer.sass'

export default function Footer() {
    return (
        <footer>
            <div className="banner">
                <p>Silver Star</p>
            </div>
            <div className="container">
                <ul>
                    Kontakt
                    <li><span>Email: </span>kontakt@silverstar.com</li>
                    <li><span>Telefon: </span>+31331413245</li>
                    <li><span>Instagram: </span>@Silver_star</li>
                    <li><span>Facebook: </span>Silver Star Bogatic</li>
                </ul>
                <ul>
                    Partneri
                    <li>inSieme</li>
                </ul>
                <ul>
                    Prava
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum.</li>
                </ul>

            </div>
        </footer>
    )
}