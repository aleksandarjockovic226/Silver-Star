import React from "react";

function CartItemsList(props) {
    const { inCart, onAddToCart, onRemoveFromCart, onRemoveItem } = props
    return (
        <div className="cartItemsList">
            <h2>Vaša korpa:</h2>
            {
                inCart.map((product) => {
                    return (
                        <div className="product" key={product.key}>
                            <img src={product.photo} alt={product.name} />
                            <div className="desc">
                                <div className="top">
                                    <p className="itemName">{product.name + " " + product.key}</p>
                                    <div className="quantity"><p>Količina :</p>
                                        <div onClick={() => onRemoveFromCart(product)} className="decrease">-</div>
                                        <div className="number">{product.quantity}</div>
                                        <div onClick={() => onAddToCart(product)} className="increase">+</div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div onClick={() => onRemoveItem(product)} className="remove">Ukolni iz korpe</div>
                                    <div className="price">Cena po komadu: {product.price}.00 rsd</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CartItemsList