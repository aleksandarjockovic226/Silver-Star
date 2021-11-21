import React, { useState } from 'react';
import '../../sass/products.sass'
import products from '../../products.json'
import Filters from './products/filters';
import ProductsGrid from './products/productsGrid';
import Pagination from './products/pagination';

// filter category btns
const all = ["Svi"]
const cat = [...new Set(products.map((item) => item.category))];
const allCat = all.concat(cat)

export default function Products(props) {
    const { onAddToCart } = props
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
            <Filters
                allCat={allCat}
                filter={filter}
                handler={handler}
            />
            <div className="products-container">
                <ProductsGrid
                    productsOnPage={productsOnPage}
                    pagesVisited={pagesVisited}
                    itemsPerPage={itemsPerPage}
                    onAddToCart={onAddToCart}
                />
                <Pagination
                    onPrev={onPrev}
                    onNext={onNext}
                    pagesNumber={pagesNumber}
                    pageNumber={pageNumber}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}