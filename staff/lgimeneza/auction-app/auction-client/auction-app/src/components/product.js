import React, {Component} from 'react';

class Product extends Component {

  state = {
    list: []
  }

  handleClick = (e) => {
    e.preventDefault()
  
    this.setState({list: [...this.state.list, 'hola']})
  }

  render(){

    return (
      <div>
        <p>Product content from react</p>
        <button className='button' onClick={this.handleClick}>Click</button>
        <ul>
          {this.state.list.map((listElement, index) => {
            return <li key={index}>{listElement}</li>
          })}
        </ul>
      </div>
    );
  }

}

export default Product;