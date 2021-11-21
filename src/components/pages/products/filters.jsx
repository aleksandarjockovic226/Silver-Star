import React from "react";

function Filters(props) {
    const {allCat, filter, handler} = props
    return (
        <div className="filters">
            <div className="cat">{
                allCat.map((cat) => {
                    return (
                        <p
                            className="category"
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
    )
}
export default Filters