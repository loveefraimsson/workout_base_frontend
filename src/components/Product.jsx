import React, { Component } from 'react';
import Header from './Header';
import cart from './images/cart.png'

export class Product extends Component {

    state = {
        product: this.props.location.state.product,
    }

    render() {

        const {name, category, image, price} = this.state.product;

        return (
            <section>
                <Header />
                <h2>{name}</h2>
                <p>{category}</p>

                <img src={require(`./images/webshop/` + image + '.webp')}></img> <br />

                <section className='buySection'>
                    <p>{price}</p>
                    <button>
                        <p>Köp</p>
                        <img src={cart} alt="Shoppingcart" width="20px" />
                    </button>
                </section>

            </section>

        )
    }
}

export default Product;