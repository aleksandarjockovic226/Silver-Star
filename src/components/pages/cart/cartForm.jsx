import React from "react";

function CartFrom(props) {
    const { nameRef, phoneRef, addressRef, nameErr, phoneErr, addressErr,sentMessage, handleSend } = props
    return (
        <div className="form">
            <h2>Unesite Vaše podatke za dostavu</h2>
            <form>
                <label htmlFor="name">
                    {nameErr}
                </label>
                <input ref={nameRef} label="name" type="text" placeholder="Puno ime i prezime" />
                <label htmlFor="phone">
                    {phoneErr}
                </label>
                <input ref={phoneRef} label="phone" type="text" placeholder="Broj telefona" />
                <label htmlFor="address">
                    {addressErr}
                </label>
                <input ref={addressRef} label="address" type="text" placeholder="Adresa" />

                <button onClick={handleSend} name className="btn">Poručite</button>
                <label className="labelSent" htmlFor="btn">{sentMessage}</label>

            </form>
        </div>
    )
}
export default CartFrom