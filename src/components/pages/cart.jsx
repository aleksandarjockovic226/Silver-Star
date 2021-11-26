import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItemsList from './cart/cartItemsList';
import CartPrice from './cart/cartPrice';
import CartFrom from './cart/cartForm'
import '../../sass/cart.sass'

export default function Cart(props) {
    const { inCart, onAddToCart, onRemoveFromCart, onRemoveItem, toggleNav } = props
    // cart pricing
    const itemsPrice = inCart.reduce((a, c) => a + c.price * c.quantity, 0);
    const shippingPrice = itemsPrice > 3000 ? 0 : 350;
    const totalPrice = itemsPrice + shippingPrice;
    // cart form validation
    const nameRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const [nameErr, setNameErr] = useState("")
    const [phoneErr, setPhoneErr] = useState("")
    const [addressErr, setAddressErr] = useState("")
    const [sentMessage, setSentMessage] = useState("")
    let regexPhone = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if (inCart.length === 0) {
        return (
            <div id="cart">
                <h2>Vaša korpa je prazna</h2>
                <p>Pogledajte našu ponudu na linku: <Link onClick={toggleNav} to='/products'>Proizvodi</Link></p>
            </div>
        )
    } else {
        const handleSend = (e) => {
            e.preventDefault();
            if (nameRef.current.value === "" || nameRef.current.value.length < 7) {
                const nameErrText = "Unesite ime i prezime sa minimum 7 karaktera."
                setNameErr(nameErrText)
                setSentMessage("")
                return
            } else {
                setNameErr("")
            } if (phoneRef.current.value === "" || !regexPhone.test(phoneRef.current.value)) {
                const phoneErrText = "Unesite ispravan broj telefona."
                setPhoneErr(phoneErrText)
                setSentMessage("")
                return
            } else {
                setPhoneErr("")
            } if (addressRef.current.value === "" || addressRef.current.value.length < 9) {
                const messageErrText = "Unesite ispravnu adresu."
                setAddressErr(messageErrText)
                setSentMessage("")
                return
            } else {
                setAddressErr("")
            }
            if (nameErr !== "" && phoneErr !== "" && addressErr !== "") {
                setSentMessage("")
                return
            } else {
                setSentMessage("Vaša pordžbina je poslata. Hvala što kupujete kod nas.")
                nameRef.current.value = ""
                phoneRef.current.value = ""
                addressRef.current.value = ""
            }
        }
        return (
            <div id="cart">
                <CartItemsList
                    inCart={inCart}
                    onAddToCart={onAddToCart}
                    onRemoveFromCart={onRemoveFromCart}
                    onRemoveItem={onRemoveItem}
                />
                <div className="left" >
                    <CartPrice
                        itemsPrice={itemsPrice}
                        shippingPrice={shippingPrice}
                        totalPrice={totalPrice}
                    />
                    <CartFrom
                        nameRef={nameRef}
                        phoneRef={phoneRef}
                        addressRef={addressRef}
                        nameErr={nameErr}
                        phoneErr={phoneErr}
                        addressErr={addressErr}
                        sentMessage={sentMessage}
                        handleSend={handleSend}
                    />
                </div>
            </div>
        )
    }
}
