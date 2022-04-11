import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import cart from './images/cart.png';
import '../styles/productCard.scss';

export class ProductCard extends Component {

    state = {
        product: this.props.product,
    }

    render() {

        const {name, category, image, price} = this.state.product;

        return (
            <section className='productCard'>
                <img className='productCardImage' src={require(`./images/webshop/` + image + '.webp')}></img> <br />
                <Link className='productCardLink' key={name} to={{pathname:`/webshop/` + name , state: {product: this.state.product}}} >{name}</Link>
            
                <section className='buySection'>
                    <p>{price}</p>
                    <button className='buyBtn'>
                        <p>Köp</p>
                        <img className='cartIcon' src={cart} alt="Shoppingcart" />
                    </button>
                </section>
            
            </section>
        )
    }
}

export default ProductCard;