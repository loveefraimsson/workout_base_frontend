import React, { Component } from 'react';
import Header from './Header';
import { addToCart } from './helperFunctions/addToCart';
import { Link } from 'react-router-dom';
import cart from './images/cart.png';

import '../styles/product.scss';

export class Product extends Component {

    state = {
        product: this.props.location.state.product,
    }

    addInCart = (product) => {
        addToCart(product)
    }

    render() {

        const {name, category, image, price} = this.state.product;

        return (
            <section className='product'>
                <Header />

                <Link className='backButton' to={"/webshop"} >Tillbaka</Link>
                <h2>{name}</h2>
                <p>{category}</p>

                <img className='productImage' src={require(`./images/webshop/` + image + '.webp')}></img> <br />

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

export default Product;