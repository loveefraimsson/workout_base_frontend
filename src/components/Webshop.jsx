import React, { Component } from 'react';
import Header from './Header';
import heroImgWorkoutbank from "./images/heroImgWorkoutbankNew.jpg";
import ProductCard from './ProductCard';

import { Link } from 'react-router-dom';

import cart from './images/cart.png';

import '../styles/webshop.scss';

export class Webshop extends Component {

  state = {
    loadedData: false,
    products: [],
    url: this.props.url,
    numberInCart: '',
    changeInCart: "",
  }

  componentDidMount = () => {
    fetch(this.state.url + 'webshop')
    .then((res) => res.json())
    .then((data) => {        
        //console.log(data);
        this.setState({ loadedData: true, products: data});
    
    }) 

    let products = JSON.parse(localStorage.getItem("cart"));
    //console.log("products.length", products.length);
    this.setState({ numberInCart: products.length })
  }

  updateCartNumber = (productsInCart) => {
    console.log("callback", productsInCart);
    this.setState({ numberInCart: productsInCart.length, changeInCart: "animateCartNumber" })
    this.animateCartNumber();
  }

  animateCartNumber = () => {
    setTimeout(() => {
        this.setState({changeInCart: "" })
    }, 3000)
  }


  render() {
    if(!this.state.loadedData) return <></>

    return (
      <>
        <Header />
        <img className='heroWebshop' src={heroImgWorkoutbank} alt="Hero-image of a man who works out" />
        <section className='webshopContainer'>
 
          <h2>Webshop</h2>

          <div className='cartSection'>
              <Link className='cartLink' to={{pathname: "/cart" , state: {from: "webshop"}}}>

                  <img className='cartIcon' src={cart} alt="Cart-icon" width="30px" />
                  <span id="numberInCart" className={this.state.changeInCart}>{this.state.numberInCart}</span>

              </Link>
                        
          </div>

          <section className='productContainer'>
            <h3>Proteinpulver</h3>
            {
              this.state.products.map((product, i) => {
                
                if(product.category == "Proteinpulver") {
                  return <ProductCard key={product.name} product={product} updateCartNumber={this.updateCartNumber} />
                }        
              }) 
            }
          </section>

          <hr className='hr' />

          <section className='productContainer'>
          <h3>Aminosyror</h3>
            {
              this.state.products.map((product, i) => {
                
                if(product.category == "Aminosyror") {
                  return <ProductCard key={product.name} product={product} updateCartNumber={this.updateCartNumber} />
                }        
              }) 
            }
          </section>

          <hr className='hr' />

          <section className='productContainer'>
          <h3>PWO</h3>
            {
              this.state.products.map((product, i) => {
                
                if(product.category == "PWO") {
                  return <ProductCard key={product.name} product={product} updateCartNumber={this.updateCartNumber} />
                }        
              }) 
            }
          </section>

          <hr className='hr' />

          <section className='productContainer'>
          <h3>Kläder</h3>
            {
              this.state.products.map((product, i) => {
                
                if(product.category == "Kläder") {
                  return <ProductCard key={product.name} product={product} updateCartNumber={this.updateCartNumber} />
                }        
              }) 
            }
          </section>
                    
        </section>
      </>
    )
  }
}

export default Webshop;