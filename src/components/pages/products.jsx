import React, { useState } from 'react';
import '../../sass/products.sass'
import products from '../../products.json'

import PrevSvg from '../../img/prev.svg';
import NextSvg from '../../img/next.svg';

// filter category btns
const all = ["Svi"]
const cat = [...new Set(products.map((item) => item.category))];
const allCat = all.concat(cat)

export default function Products(props) {
    const {onAddToCart} = props
    // products to display 
    const [productsOnPage, setProductsOnPage] = useState(products)
    // pagination
    const [pageNumber, setPageNumber] = useState(0)
    const itemsPerPage = 12
    const pagesVisited = pageNumber * itemsPerPage
    const pagesNumber = [];
    const math = Math.floor(productsOnPage.length / itemsPerPage)
    for (let i = 1; i <= Math.ceil(productsOnPage.length / itemsPerPage); i++) {
        pagesNumber.push(i);
    }
    let paginate = (pagesNumber) => {
        setPageNumber(pagesNumber);
    };
    function onNext() {
        if (pageNumber === math) {
            paginate(0)
        } else if (pagesNumber.length === 1) {
            paginate(0)
        } else {
            paginate(pageNumber + 1)
        }

    }
    function onPrev() {
        if (pageNumber === 0) {
            paginate(math)
            if (pagesNumber.length === 1) {
                paginate(0)
            } 
        } else {
            paginate(pageNumber - 1)
        }
    }
    // filter category 
    let filter = (button) => {
        if (button === "Svi") {
            setPageNumber(0);
            setProductsOnPage(products);
            return;
        }
        let filterData = products.filter((item) => item.category === button);
        setProductsOnPage(filterData);
        setPageNumber(0);
        window.scrollTo({
        });
    };
    // sorting 
    var list = productsOnPage.slice();
    function handler(event) {
        let uslov = event.target.value;
        switch (uslov) {
            case "starije":
                list.sort((a, b) => a.id - b.id)
                setProductsOnPage(list)
                break;
            case "novije":
                list.sort((a, b) => b.id - a.id)
                setProductsOnPage(list)
                break;
            case "jeftinije":
                list.sort((a, b) => a.price - b.price)
                setProductsOnPage(list)
                break;
            case "skuplje":
                list.sort((a, b) => b.price - a.price)
                setProductsOnPage(list)
                break;
            default:
                break;
        }
    }
    return (
        <div id="products">
            <div className="filters">
                <div className="cat">{
                    allCat.map((cat) => {
                        return (
                            <p
                                key={cat}
                                onClick={() => {
                                    filter(cat)
                                }}
                            >
                                {cat}
                            </p>
                        )
                    })}
                </div>
                <form className="sort">
                    <select
                        onChange={handler}
                    >
                        <option value="podrazumevano">--Sortiraj--</option>
                        <option value="novije">Prvo novije</option>
                        <option value="starije">Prvo starije</option>
                        <option value="jeftinije">Prvo jeftinije</option>
                        <option value="skuplje">Prvo skuplje</option>
                    </select>
                </form>
            </div>
            <div className="products-container">
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
                                            onClick={()=>onAddToCart(product)}
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
                <div className="pagination">
                    <div className="arrows">
                        <div onClick={onPrev} className="prev"><img src={PrevSvg} alt="arrow-prev" /></div>
                        <div onClick={onNext} className="next"><img src={NextSvg} alt="arrow-next" /></div>
                    </div>
                    <ul className="numbers">
                        {pagesNumber.map((number) => (
                            <li key={number}
                                className={pageNumber + 1 === number ? "active-page" : ""}
                                onClick={() =>
                                    paginate(number)}>
                                {number--}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}