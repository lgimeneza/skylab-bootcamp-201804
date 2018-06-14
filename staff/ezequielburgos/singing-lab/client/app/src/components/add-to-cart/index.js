import React, { Component } from 'react'
import logic from '../../logic'

class AddToCard extends Component{
    state = {
        product: []
    }

    add(){
        logic.retrieveProduct(this.props.match.params.id)
            .then(product => this.setState({ product }))
    }

    render(){
        return (
            <button onClick={() => this.add()}>add to cart</button>
        )
    }
}
