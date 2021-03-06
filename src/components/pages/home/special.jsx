import React, { useState } from 'react';
import PrevSvg from '../../../img/prev.svg';
import NextSvg from '../../../img/next.svg';
import special from '../../../special.json';

export default function Special(props) {
    const { onAddToCart } = props
    // patination
    const [currentSlide, setCurrentSlide] = useState(1);
    const slidesPerPage = 1;
    const indexOfLastSlide = currentSlide * slidesPerPage;
    const indexOfFirstSlide = indexOfLastSlide - slidesPerPage;
    const Slide = special.slice(indexOfFirstSlide, indexOfLastSlide);
    function onNext() {
        if (currentSlide === special.length) {
            setCurrentSlide(1)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }
    function onPrev() {
        if (currentSlide === 1) {
            setCurrentSlide(special.length)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }
    return (
        <div id="special">
            <div className="left">
                <p className="title">Izdvojeno <br /> Zima 2022</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id repudiandae blanditiis hic autem, laboriosam possimus cum? Aspernatur iusto nemo consectetur esse, voluptas sit, facilis minima sapiente animi harum sequi reiciendis blanditiis voluptatem doloribus sint.</p>
            </div>
            <div className="right">
                <div className="cards">
                    {Slide.map((product) => {
                        return (
                            <div key={product.key} className="card">
                                <img
                                    className="cardImage"
                                    alt={product.name}
                                    src={product.photo}
                                />
                                <div className="cardText">
                                    <p className="productPrice">{product.name + " " + product.key}</p>
                                    <p>{product.price} .00 Rsd</p>
                                    <button
                                        onClick={() => onAddToCart(product)} className="btn">
                                        Dodaj u korpu
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="navigation">
                    <div className="arrows">
                        <div onClick={onPrev} className="prev"><img src={PrevSvg} alt="arrow-prev" /></div>
                        <div onClick={onNext} className="next"><img src={NextSvg} alt="arrow-next" /></div>
                    </div>
                    <div className="pages">
                        {currentSlide}/{special.length}
                    </div>
                </div>
            </div>
        </div>
    )
}