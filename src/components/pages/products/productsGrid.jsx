import React from "react";

function ProductsGrid(props) {
    const { productsOnPage, pagesVisited, itemsPerPage, onAddToCart } = props
    return (
        <div className="grid">
            {productsOnPage
                .slice(pagesVisited, pagesVisited + itemsPerPage)
                .map((product) => {
                    return (
                        <div className="item-container" key={product.id}>
                            <div className="item">
                                <img src={product.photo} alt={product.id} />
                                <p>{product.name + " " + product.key}</p>
                                <div className="card-div">
                                    <p>{product.price} .00 Rsd</p>
                                    <div
                                        onClick={() => onAddToCart(product)}
                                        className="btn">
                                        Dodaj u korpu
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}
export default ProductsGrid