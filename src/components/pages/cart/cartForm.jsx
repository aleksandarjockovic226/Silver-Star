import React from "react";

function CartFrom(props) {
    const { } = props
    return (
        <div className="form">
            <h2>Unesite Vaše podatke za dostavu</h2>
            <form>
                <label htmlFor="name">
                    { }
                </label>
                <input label="name" type="text" placeholder="Puno ime i prezime" />
                <label htmlFor="phone">
                    { }
                </label>
                <input label="phone" type="text" placeholder="Broj telefona" />
                <label htmlFor="address">
                    { }
                </label>
                <input label="address" type="text" placeholder="Adresa" />

                <button className="btn">Poručite</button>
            </form>
        </div>
    )
}
export default CartFrom