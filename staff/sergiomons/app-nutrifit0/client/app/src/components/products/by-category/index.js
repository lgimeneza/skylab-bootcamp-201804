import React, { Component } from 'react'
import logic from '../../../logic'
import ItemsProducts from '../../items-list/items-products'

class ProductsByCategory extends Component {

    state = {
        products: [],
        categoryName:''
     }

    componentDidMount() {

        const categoryId = this.props.categoryId

        logic.listProductsByCategory(categoryId)
          .then(products => {
                this.setState({
                    products
                })
          }) 
          logic.listAllCategories() 
                .then(categories => {
                    const currentCategory = categories.filter( _category => _category.id === categoryId)

                    this.setState({
                        categoryName: currentCategory[0].name
                    })
                })     
    }

    componentDidUpdate(prevProps) {

        const categoryId = this.props.categoryId

        if(prevProps.categoryId !== categoryId){

        logic.listProductsByCategory(categoryId)
          .then(products => {
                this.setState({
                    products
                })
          })      
          logic.listAllCategories() 
                  .then(categories => {
                      const currentCategory = categories.filter( _category => _category.id === categoryId)
  
                      this.setState({
                          categoryName: currentCategory[0].name
                      })
                  }) 
        }        
    }

   render() {
    return (
        <div>
            <ItemsProducts products={this.state.products} onAddToCart={this.props.onAddToCart} categoryName={this.state.categoryName}/>                                   
        </div>  
    )
   }       
}

export default ProductsByCategory