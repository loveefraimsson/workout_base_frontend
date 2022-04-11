import React, { Component } from 'react';
import Header from './Header';

export class Cart extends Component {
    render() {
        return (
            <section className='cartContainer'>
                <Header />
                <h2>Cart</h2>
            </section>
            
        )
    }
}

export default Cart;