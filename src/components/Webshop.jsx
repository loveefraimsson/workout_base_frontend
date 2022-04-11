import React, { Component } from 'react';
import Header from './Header';
import heroImgWorkoutbank from "./images/heroImgWorkoutbank.png";
import ProductCard from './ProductCard';

import '../styles/webshop.scss';

export class Webshop extends Component {

  state = {
    loadedData: false,
    products: [],
    url: this.props.url,
  }

  componentDidMount = () => {
    fetch(this.state.url + 'webshop')
    .then((res) => res.json())
    .then((data) => {        
        console.log(data);
        this.setState({ loadedData: true, products: data});
    
    }) 
  }


  render() {
    if(!this.state.loadedData) return <></>

    return (
      <section className='webshopContainer'>
        <Header />
        {/* <img  src={heroImgWorkoutbank} alt="Hero-image of a man who works out" width="100%" /> */}

        <h2>Webshop</h2>

        <section className='productContainer'>
          {
            this.state.products.map((product, i) => {
              
              if(product.category == "Proteinpulver") {
                return <ProductCard key={product.name} product={product} />
              }        
            }) 
          }
        </section>

        <hr className='hr' />

        <section className='productContainer'>
          {
            this.state.products.map((product, i) => {
              
              if(product.category == "Aminosyror") {
                return <ProductCard key={product.name} product={product} />
              }        
            }) 
          }
        </section>

        <hr className='hr' />

        <section className='productContainer'>
          {
            this.state.products.map((product, i) => {
              
              if(product.category == "PWO") {
                return <ProductCard key={product.name} product={product} />
              }        
            }) 
          }
        </section>

        <hr className='hr' />

        <section className='productContainer'>
          {
            this.state.products.map((product, i) => {
              
              if(product.category == "Kläder") {
                return <ProductCard key={product.name} product={product} />
              }        
            }) 
          }
        </section>

        <hr className='hr' />
        

        {/* {
          this.state.products.map((product, i) => {
            return <ProductCard key={product.name} product={product} />
          }) 
        } */}


          
        </section>
    )
  }
}

export default Webshop;