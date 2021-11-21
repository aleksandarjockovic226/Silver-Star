import React from "react";

function CartPrice(props) {
    const { itemsPrice, shippingPrice, totalPrice } = props
    return (
        <div className="price">
            <h2 className="title">Vrednost Vaše korpe:</h2>
            <div className="container">
                <div className="basePrice"><p>Vrednost korpe:</p><span>{itemsPrice},00 rsd</span></div>
                <div className="shippingPrice"><p>Dostava</p><span>{shippingPrice}.00rsd</span></div>
            </div><br />
            <div className="totalPrice"><p>Ukupna vrednost korpe sa dostavom</p><span>{totalPrice}.00rsd</span></div>
        </div>
    )
}
export default CartPrice