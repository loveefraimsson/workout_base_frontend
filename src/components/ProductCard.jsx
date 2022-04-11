import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProductCard extends Component {

    state = {
        product: this.props.product,
    }

    render() {
        return (
            <section className='productCard'>
                <Link className='productCardLink' key={this.state.product.name} to={{pathname:`/webshop/` + this.state.product.name , state: {product: this.state.product}}} >{this.state.product.name}</Link>
            </section>
        )
    }
}

export default ProductCard;