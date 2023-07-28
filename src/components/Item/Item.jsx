//import { Link } from "react-router-dom";
import './Item.css'

export const Item = ({item}) => {
    return (
        <>
            <div className="card">
                <div className="image"><span className="text">{item.thumbnail}</span></div>
                <span className="title">{item.title}</span>
                <span className="price">${item.price}</span>
            </div>
        </>
    )
}

/**
 *         <div>
            <div className="cards">
                <img className="cards-img" src= {item.thumbnail} alt='imagen'/>
                <div className="cards-info">
                <div className="cards-text">
                    <p className="text-title">{item.title}</p>
                    <p className="text-subtitle">Stock disponible: {item.stock}</p>
                </div>

                <Link to={`/product/${item._id}`} className="cards-icon">
                    <svg viewBox="0 0 28 25">
                    <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
                    </svg>
                </Link>
                </div>
            </div>               
        </div>
 */