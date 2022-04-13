import React, { Component } from 'react';
import Header from './Header';
import { addToCart } from './helperFunctions/addToCart';
import { Link } from 'react-router-dom';
import cart from './images/cart.png';

import '../styles/product.scss';

export class Product extends Component {

    state = {
        product: this.props.location.state.product,
        numberInCart: '',
        from: this.props.location.state.from,
        changeInCart: "",
    }

    componentDidMount = () => {
        let productsInCart = JSON.parse(localStorage.getItem("cart"));
        this.setState({ numberInCart: productsInCart.length })
    }    
 
    addInCart = (product) => {
        addToCart(product);
        let productsInCart = JSON.parse(localStorage.getItem("cart"));
        this.setState({ numberInCart: productsInCart.length, changeInCart: "animateCartNumber" })
        this.animateCartNumber();
    }

    animateCartNumber = () => {
        setTimeout(() => {
            this.setState({changeInCart: "" })
        }, 3000)
    }


    render() {

        const {name, category, image, price, description1, description2, description3} = this.state.product;

        return (
            <section className='product'>
                <Header />

                <div className='cartSection'>

                    {/* <Link to={"/cart"}><img className='cartIcon' src={cart} alt="Cart-icon" width="20px" />Gå till kundvagnen</Link><span>{this.state.numberInCart}</span> */}
                    <Link className='productCardLink' to={{pathname: "/cart" , state: {from: "product", currentProduct: this.state.product}}}><img className='cartIcon' src={cart} alt="Cart-icon" width="20px" />Gå till kundvagnen</Link><span className={this.state.changeInCart}>{this.state.numberInCart}</span>
                
                </div>

                <Link className='backButton' to={"/webshop"} >Tillbaka till webshopen</Link>
                <h2>{name}</h2>
                <p>{category}</p>

                <img className='productImage' src={require(`./images/webshop/` + image + '.webp')}></img> <br />

                <p>{description1}</p>
                <p>{description2}</p>
                <p>{description3}</p>

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