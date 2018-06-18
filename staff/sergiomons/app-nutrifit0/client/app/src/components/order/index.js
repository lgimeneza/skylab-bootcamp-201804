import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'

class Order extends Component {

    state = {
        products: [],
        deliveryAddress: ''

     }

    componentDidMount() {

    logic.listCartById((products) => {this.setState({products})})
    }

    getItems = () => {    
        
    }


   render() {

    return (
        <main>   
            
            <div className="row ml-3">
            <div class="col-md-9 input-group mb-3 ">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-medium">Dirección de envío<i id='icon' className="fas fa-truck ml-2"></i></span>
                    </div>
                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-medium"/>      
            </div>
            </div>
            <div className="row ml-3">
<form className="mt-5 mb-5 mx-auto">

  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">Nombre en la tarjeta</label>
      <input type="text" class="form-control" id="validationServer03" placeholder="Nombre y apellidos" required/>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">Número de tarjeta</label>
      <input type="number" class="form-control " id="validationServer03" placeholder="Introduce un Número de tarjeta válido" required/>

    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04">Fecha de expiración</label>
      <input type="date" value="YYYY-MM"class="form-control" id="validationServer04" placeholder="MM/AA" required/>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05">CCV</label>
      <input type="number" class="form-control" id="validationServer05" placeholder="CCV" required/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck3" required/>
      <label class="form-check-label" for="invalidCheck3" style={{color:"black", fontSize: "1.1rem" }}>
        Acepto los términos y condiciones
      </label>

    </div>
  </div>

    <button className="btn btn-md btn-outline-dark my-2 my-sm-0 ml-1 mb-4 mt-3 mx-auto" type="submit" onClick={() => logic.createOrder()}>Finalizar Pedido</button>                        

</form>
</div>
   
               
<div className="col-xl-2 col-lg-4 col-md-4 col-sm-7 col-xs-8 ml-auto mb-4 mt-3">
                            <div class="card">
                                <h5 class="card-header" style={{borderTopLeftRadius: "calc(1rem - 1px)", borderTopRightRadius: "calc(1rem - 1px)"}}>
                                Total Carrito
                                </h5>
                                <div class="card-body">
                                    <p class="card-text" style={{fontSize: "2rem"}}>10 €</p>
                                </div>
                            </div>
            </div>
            
    </main>  

        )
   }       
}

export default Order