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
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            
                            <div class="col-md-12 mb-4">
                                <div class="carousel slide" id="carousel-235923">
                                    <ol class="carousel-indicators">
                                        <li data-slide-to="0" data-target="#carousel-235923" class="active">
                                        </li>
                                        <li data-slide-to="1" data-target="#carousel-235923">
                                        </li>
                                        <li data-slide-to="2" data-target="#carousel-235923">
                                        </li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" alt="Carousel Bootstrap First" src="https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg" />
                                            <div class="carousel-caption">
                                                <h4>
                                                    First Thumbnail label
                                                </h4>
                                                <p>
                                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" alt="Carousel Bootstrap Second" src="https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg" />
                                            <div class="carousel-caption">
                                                <h4>
                                                    Second Thumbnail label
                                                </h4>
                                                <p>
                                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" alt="Carousel Bootstrap Third" src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg" />
                                            <div class="carousel-caption">
                                                <h4>
                                                    Third Thumbnail label
                                                </h4>
                                                <p>
                                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                                </p>
                                            </div>
                                        </div>
                                    </div> <a class="carousel-control-prev" href="#carousel-235923" data-slide="prev"><span class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#carousel-235923" data-slide="next"><span class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-2">
                                <div class="list-group" id="list-tab" role="tablist">
                                    <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="" role="tab" aria-controls="home">Descatados</a>
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Todos</a>
                                    <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="" role="tab" aria-controls="home">Packs</a>

                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Carnes</a>
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Pastas</a>
                                    <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="" role="tab" aria-controls="messages">Pescados</a>
                                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="" role="tab" aria-controls="settings">Proteínas</a>
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Sopas</a>
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Vegetarian</a>
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Vegan</a>
                                </div>
                            </div>
                            <div class="col-md-10">
                                <div class="row ml-3">
                                    <div class="col-md-4">
                                        <div class="card">
                                            <img class="card-img-top" alt="Bootstrap Thumbnail First" src="https://www.layoutit.com/img/people-q-c-600-200-1.jpg" />
                                            <div class="card-block">
                                                <h5 class="card-title">
                                                    Card title
                                                </h5>
                                                <p class="card-text">
                                                    - Precio:  3.40 €/und
                                                </p>
                                                <p class="card-bottom">
                                                    <button className="btn btn-md btn-outline-primary my-2 my-sm-0 mr-2" type="button">Detalles</button> 
                                                    <button className="btn btn-md btn-outline-success my-2 my-sm-0 mr-2" type="button">Añadir al carrito</button> 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card">
                                            <img class="card-img-top" alt="Bootstrap Thumbnail Second" src="https://www.layoutit.com/img/city-q-c-600-200-1.jpg" />
                                            <div class="card-block">
                                                <h5 class="card-title">
                                                    Card title
                                                </h5>
                                                <p class="card-text">
                                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                                </p>
                                                <p>
                                                    <a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card">
                                            <img class="card-img-top" alt="Bootstrap Thumbnail Third" src="https://www.layoutit.com/img/sports-q-c-600-200-1.jpg" />
                                            <div class="card-block">
                                                <h5 class="card-title">
                                                    Card title
                                                </h5>
                                                <p class="card-text">
                                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                                </p>
                                                <p>
                                                    <a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <ul>
                                    <li class="list-item">
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li class="list-item">
                                        Consectetur adipiscing elit
                                    </li>
                                    <li class="list-item">
                                        Integer molestie lorem at massa
                                    </li>
                                    <li class="list-item">
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li class="list-item">
                                        Nulla volutpat aliquam velit
                                    </li>
                                    <li class="list-item">
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li class="list-item">
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li class="list-item">
                                        Eget porttitor lorem
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul>
                                    <li class="list-item">
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li class="list-item">
                                        Consectetur adipiscing elit
                                    </li>
                                    <li class="list-item">
                                        Integer molestie lorem at massa
                                    </li>
                                    <li class="list-item">
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li class="list-item">
                                        Nulla volutpat aliquam velit
                                    </li>
                                    <li class="list-item">
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li class="list-item">
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li class="list-item">
                                        Eget porttitor lorem
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul>
                                    <li class="list-item">
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li class="list-item">
                                        Consectetur adipiscing elit
                                    </li>
                                    <li class="list-item">
                                        Integer molestie lorem at massa
                                    </li>
                                    <li class="list-item">
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li class="list-item">
                                        Nulla volutpat aliquam velit
                                    </li>
                                    <li class="list-item">
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li class="list-item">
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li class="list-item">
                                        Eget porttitor lorem
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <ul>
                    {this.state.products.map(product => {
                        return (<li key={product.id} className="list-group-item">{product.name} - {product.price}€</li>)})}
                </ul>
                        
            
           </main>
        </div>
        )
   }       
}

export default Home