import React from 'react';

import Hero from './home/hero.jsx';
import Special from './home/special.jsx';
import Contact from './home/contact.jsx';


import '../../sass/home.sass'

export default function Home(){
    return(
        <main>
            <Hero />
            <Special />
            <Contact />
        </main>
    )
}