import React from 'react';

import SendSvg from '../../../img/send.svg';


export default function Contact(){
    return(
        <div id="contact">
            <div className="left">
                <p className="title">Kontakt</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae suscipit sequi, tenetur similique saepe voluptas, temporibus explicabo magni eligendi provident odit!</p>
            </div>
            <div className="right">
                <p className="title">Kontaktirajte Nas</p>
                <form>
                    <input type="text" name="name" placeholder="Ime" />
                    <input type="mail" name="mail" placeholder="Email" />
                    <input type="phone" name="phone" placeholder="Telefon" />
                    <textarea name="message" placeholder="Poruka"></textarea>
                    <button>Pošaljite<img src={SendSvg} alt="send" /></button>
                </form>
            </div>
        </div>
    )
}