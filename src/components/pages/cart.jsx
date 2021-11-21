import React from 'react';
import CartItemsList from './cart/cartItemsList';
import CartPrice from './cart/cartPrice';
import CartFrom from './cart/cartForm'
import '../../sass/cart.sass'

export default function Cart(props) {
    const { inCart, onAddToCart, onRemoveFromCart, onRemoveItem } = props
    const itemsPrice = inCart.reduce((a, c) => a + c.price * c.quantity, 0);
    const shippingPrice = itemsPrice > 3000 ? 0 : 350;
    const totalPrice = itemsPrice + shippingPrice;

    if (inCart.length === 0) {
        return (
            <div id="cart">
                <h2>Vaša korpa je prazna</h2>
            </div>
        )
    } else {
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
                    <CartFrom />
                </div>
            </div>
        )
    }
}
