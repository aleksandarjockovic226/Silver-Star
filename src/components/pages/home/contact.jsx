import React, { useRef, useState } from 'react';
import SendSvg from '../../../img/send.svg';

function Contact() {
    const name = useRef();
    const email = useRef();
    const phone = useRef();
    const message = useRef();

    const [nameErr, setNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [phoneErr, setPhoneErr] = useState("")
    const [messageErr, setMessageErr] = useState("")

    const [sentMessage, setSentMessage] = useState("")

    let regexEmail = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;
    let regexPhone = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

    const handleSend = (e) => {

        e.preventDefault();

        if (name.current.value === "" || name.current.value.length < 3) {
            const nameErrText = "Unesite ime sa minimum 3 karaktera."
            setNameErr(nameErrText)
            setSentMessage("")
            return
        } else {
            setNameErr("")
        } if (email.current.value === "" || !regexEmail.test(email.current.value)) {
            const emailErrText = "Unesite ispravnu email adresu."
            setEmailErr(emailErrText)
            setSentMessage("")
            return
        } else {
            setEmailErr("")
        } if (phone.current.value === "" || !regexPhone.test(phone.current.value)) {
            const phoneErrText = "Unesite ispravan broj telefona."
            setPhoneErr(phoneErrText)
            setSentMessage("")
            return
        } else {
            setPhoneErr("")
        } if (message.current.value === "" || message.current.value.length < 9) {
            const messageErrText = "Unesite poruku sa minimum 9 karaktera."
            setMessageErr(messageErrText)
            setSentMessage("")
            return
        } else {
            setMessageErr("")
        }

        if (nameErr !== "" && emailErr !== "" && phoneErr !== "" && messageErr !== "") {
            setSentMessage("")
            return
        } else {
            setSentMessage("Vaša poruka je poslata.")
            name.current.value = ""
            email.current.value = ""
            phone.current.value = ""
            message.current.value = ""
        }



    }
    return (
        <div id="contact">
            <div className="left">
                <p className="title">Kontakt</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae suscipit sequi, tenetur similique saepe voluptas, temporibus explicabo magni eligendi provident odit!</p>
            </div>
            <div className="right">
                <p className="title">Kontaktirajte Nas</p>
                <form>
                    <label htmlFor="name">
                        {nameErr}
                    </label>
                    <input
                        ref={name}
                        type="text"
                        name="name"
                        placeholder="Ime"
                    />
                    <label htmlFor="email">
                        {emailErr}
                    </label>
                    <input
                        ref={email}
                        type="mail"
                        name="email"
                        placeholder="Email"
                    />
                    <label htmlFor="phone">
                        {phoneErr}
                    </label>
                    <input
                        ref={phone}
                        type="phone"
                        name="phone"
                        placeholder="Telefon"
                    />
                    <label htmlFor="message">
                        {messageErr}
                    </label>
                    <textarea
                        ref={message}
                        name="message"
                        placeholder="Poruka"
                    ></textarea>

                    <button name="btn" onClick={handleSend} >Pošaljite<img src={SendSvg} alt="send" /></button>
                    <label className="labelSent" htmlFor="btn">{sentMessage}</label>
                </form>
            </div>
        </div>
    )
}
export default Contact