import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from './helperFunctions/addToCart';

import cart from './images/cart.png';
import '../styles/productCard.scss';

export class ProductCard extends Component {

    state = {
        product: this.props.product,
        numberInCart: ''
    }

    addInCart = (product) => {
        addToCart(product);

        let productsInCart = JSON.parse(localStorage.getItem("cart"));
        //console.log("products.length", productsInCart.length);
        this.props.updateCartNumber(productsInCart);
        //this.setState({ numberInCart: })
        
    }

    render() {

        const {name, category, image, price} = this.state.product;

        return (
            <section className='productCard'>
                

                <Link className='productCardLink' key={name} to={{pathname:`/webshop/` + name , state: {product: this.state.product}}}><img className='productCardImage' src={require(`./images/webshop/` + image + '.webp')}></img> <br />{name}</Link>
                
            
                <section className='buySection'>
                    <p>{price}</p>
                    <button className='buyBtn' onClick={() => this.addInCart(this.state.product)}>
                        <p>Köp</p>
                        <img className='cartIcon' src={cart} alt="Shoppingcart" />
                    </button>
                </section>
            
            </section>
        )
    }
}

export default ProductCard;