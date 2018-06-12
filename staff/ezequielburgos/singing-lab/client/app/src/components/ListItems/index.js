import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default ({ items, btnShow = false, productDetail = false }) => (
    <ul className="listitems-body">
        <div className="thumbnail listitems-subbody">
        {items.map(item => (
            <li key={item._id} className="items">
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={item.image} alt="course or category" />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        {btnShow && (<p><Link to={`/categories/${item._id}`} className="btn btn-primary list-button" role="button">Show me more</Link></p>)}
                        {productDetail && (<p><Link to={`/categories/products/${item._id}`} className="btn btn-primary list-button" role="button">product details</Link></p>)}
                    </div>
                </div>
            </li>
        ))}
         </div>
    </ul>
);