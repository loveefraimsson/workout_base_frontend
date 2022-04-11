import React, { Component } from 'react';
import Header from './Header';
import cart from './images/cart.png';

import '../styles/product.scss';

export class Product extends Component {

    state = {
        product: this.props.location.state.product,
    }

    render() {

        const {name, category, image, price} = this.state.product;

        return (
            <section className='product'>
                <Header />
                <h2>{name}</h2>
                <p>{category}</p>

                <img className='productImage' src={require(`./images/webshop/` + image + '.webp')}></img> <br />

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

export default Product;