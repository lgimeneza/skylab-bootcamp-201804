import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import './index.css'
import Nav from '../nav'

class Home extends Component {

    state = {

       products: [],
       isLogged: false
    }

    componentDidMount() {
        logic.listProducts()
          .then(products => {
                this.setState({
                    products
                })
          })
          
    }

   render() {

    return (
        <div>
            <Nav/>
            <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">  
                            <div className="col-md-12 mb-4">
                                <div className="carousel slide" id="carousel-235923">
                                    <ol className="carousel-indicators">
                                        <li data-slide-to="0" data-target="#carousel-235923" className="active"></li>
                                        <li data-slide-to="1" data-target="#carousel-235923"> </li>
                                        <li data-slide-to="2" data-target="#carousel-235923"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" alt="Entrena con la mejor energía" src="http://sevilla.abc.es/gurme//wp-content/uploads/2014/06/receta-salteado-verduras-1-1440x810.jpg" />
                                            <div className="carousel-caption">
                                                <p className="carousel-text-sm">Entrena con la mejor energía</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="item d-block w-100" alt="Pollo con verduras" src="http://frcdn.ar-cdn.com/recipes/port960/41938df4-bc6d-4291-a25e-a2140359a9a9.jpg"/>
                                            <div className="carousel-caption">
                                                <p>Platos saludables</p>
                                            </div>
                                        </div>
                                        
                                        <div className="carousel-item">
                                            <img className="d-block w-100" alt="Carousel Bootstrap Third" src="https://www.jabefitness.com/wp-content/uploads/2014/01/DSC04477-Medium.jpg" />
                                            <div className="carousel-caption">
                                                <h4>Pruébalos</h4>
                                                <p>Selecciona tu comida entre nuestras diferentes categorías</p>
                                            </div>
                                        </div>
                                    </div> <a className="carousel-control-prev" href="#carousel-235923" data-slide="prev"><span className="carousel-control-prev-icon"></span> <span className="sr-only">Previous</span></a> <a className="carousel-control-next" href="#carousel-235923" data-slide="next"><span className="carousel-control-next-icon"></span> <span className="sr-only">Next</span></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-12 mb-5">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action active" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Productos</a>
                                    <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="" role="tab" aria-controls="home">Packs</a>
                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Carnes</a>
                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Pastas</a>
                                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="" role="tab" aria-controls="messages">Pescados</a>
                                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="" role="tab" aria-controls="settings">Proteínas</a>
                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Sopas</a>
                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Vegetarian</a>
                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Vegan</a>
                                </div>
                            </div>

                            <div className="col-10 col-lg-10 col-md-8 col-sm-8 col-xs-12">
                                <ul>
                                    <div className="row ml-3">
                                        {this.state.products.map(product => {
                                        return ( 
                                            <div className="col-xl-4 col-lg-6 col-md-11 col-sm-12 col-xs-12" >
                                                <div className="card mb-5">
                                                    <img className="card-img-top" alt={product.name} src={product.image} />
                                                    <div className="card-block">
                                                        <h5 className="card-title">{product.name}</h5>
                                                        <p className="card-text">Precio: {product.price} €/und</p>
                                                        <p className="card-bottom">
                                                            <button className="btn btn-md btn-outline-secondary my-2 my-sm-0 ml-1" type="submit">Detalles</button> 
                                                            <button className="btn btn-md btn-outline-dark my-2 my-sm-0 ml-4" type="submit">Añadir al carrito</button>                                                  
                                                        </p>
                                                    </div>
                                                </div>
                                        </div>
                                         )})}
                                    </div>      
                                </ul>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <ul>
                                    <li className="list-item">
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="list-item">
                                        Consectetur adipiscing elit
                                    </li>
                                    <li className="list-item">
                                        Integer molestie lorem at massa
                                    </li>
                                    <li className="list-item">
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li className="list-item">
                                        Nulla volutpat aliquam velit
                                    </li>
                                    <li className="list-item">
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li className="list-item">
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li className="list-item">
                                        Eget porttitor lorem
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li className="list-item">
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="list-item">
                                        Consectetur adipiscing elit
                                    </li>
                                    <li className="list-item">
                                        Integer molestie lorem at massa
                                    </li>
                                    <li className="list-item">
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li className="list-item">
                                        Nulla volutpat aliquam velit
                                    </li>
                                    <li className="list-item">
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li className="list-item">
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li className="list-item">
                                        Eget porttitor lorem
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li className="list-item">
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="list-item">
                                        Consectetur adipiscing elit
                                    </li>
                                    <li className="list-item">
                                        Integer molestie lorem at massa
                                    </li>
                                    <li className="list-item">
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li className="list-item">
                                        Nulla volutpat aliquam velit
                                    </li>
                                    <li className="list-item">
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li className="list-item">
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li className="list-item">
                                        Eget porttitor lorem
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                        
           </main>
        </div>
        )
   }       
}

export default Home