import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default ({ items, btnShow = false, productDetail = false }) => (
    <ul className="thumbnail">
        {(items.length) ?
            items.map(item => (
                <li key={item._id}>
                    <div className="col-sm-6 col-md-4 products">
                        <img src={item.image} alt="bruno mars" width="240px" height="200px" />
                        <div className="caption">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            {btnShow && (<p><Link to={`/categories/${item._id}`} className="btn btn-primary" role="button">Button</Link></p>)}
                            {productDetail && (<p><Link to={`/categories/products/${item._id}`} className="btn btn-primary" role="button">product details</Link></p>)}
                        </div>
                    </div>
                </li>
            ))
            :
            <li key={items._id}>
                <div className="col-sm-6 col-md-4 products">
                    <img src={items.image} alt="bruno mars" width="240px" height="200px" />
                    <div className="caption">
                        <h3>{items.name}</h3>
                        <p>{items.description}</p>
                    </div>
                </div>
            </li>
        }
    </ul>
);