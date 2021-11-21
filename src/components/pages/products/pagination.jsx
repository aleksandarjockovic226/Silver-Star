import React from "react";

import PrevSvg from '../../../img/prev.svg';
import NextSvg from '../../../img/next.svg';

function Pagination(props) {
    const { onPrev, onNext, pagesNumber, pageNumber, paginate } = props
    return (
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
    )
}
export default Pagination