import React, { Component } from 'react'
import './index.css'
import Footer from './../footer'

class ProductData extends Component {

    render() {
        return (
            <main>
                <h2 className="main-title">this is the Cart</h2>
                <section className="productData">
                    <div className="productDataSub">
                     
                    </div>
                </section>
                <div className="jumbotron">
                    <h1 className="display-4">Chat with our teachers!</h1>
                    <p className="lead">Use the firebase chat example from the Firebase workshop</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-outline-secondary" role="button">Chat now</a>
                </div>

                <Footer />
            </main>
        )
    }

}

export default ProductData