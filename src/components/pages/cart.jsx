import React from 'react';

import '../../sass/cart.sass'

export default function Cart(props) {
    const {inCart, onAddToCart, onRemoveFromCart} = props
    const itemsPrice = inCart.reduce((a,c) => a + c.price * c.quantity, 0);
    const shippingPrice = itemsPrice > 3000 ? 0 : 350;
    const totalPrice = itemsPrice + shippingPrice;

    if (inCart.length === 0) {
        return (
            <div id="cart">
                <div className="cartItemsList">
                    PRAZNO
                </div>
                <div className="buy">
                    <p className="title">Vrednost Vaše korpe:</p>
                    <div className="container">
                        <div className="basePrice"><p>Vrednost korpe:</p><span>0.00rsd</span></div>
                        <div className="shippingPrice"><p>Dostava</p><span>0.00rsd</span></div>
                    </div>
                    <div className="totalPrice"><p>Ukupna vrednost korpe sa dostavom</p><span>0.00rsd</span></div>
                    <button>Poručite</button>
                </div>
            </div>
        )
    } else {
        return (
            <div id="cart">
                <div className="cartItemsList">{
                    inCart.map((product) => {
                        return (
                            <div key={product.key}>
                                <img src={product.photo} alt={product.name} />
                                <div className="desc">
                                    <div className="top">
                                        <p className="itemName">{product.name + " " + product.key}</p>
                                        <div className="quantity">
                                            <div onClick={()=>onRemoveFromCart(product)} className="decrease">-</div>
                                            <div className="number">{product.quantity}</div>
                                            <div onClick={()=>onAddToCart(product)} className="increase">+</div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="btn">Ukolni iz korpe</div>
                                        <div className="price">Cena po komadu: {product.price}.00 rsd</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <div className="buy">
                    <p className="title">Vrednost Vaše korpe:</p>
                    <div className="container">
                        <div className="basePrice"><p>Vrednost korpe:</p><span>{itemsPrice},00 rsd</span></div>
                        <div className="shippingPrice"><p>Dostava</p><span>{shippingPrice}.00rsd</span></div>
                    </div>
                    <div className="totalPrice"><p>Ukupna vrednost korpe sa dostavom</p><span>{totalPrice}.00rsd</span></div>
                    <button>Poručgit site</button>
                </div>
            </div>
        )
    }
}
