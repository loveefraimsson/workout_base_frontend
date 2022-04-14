import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


import '../styles/cart.scss';

export class Cart extends Component {

    state = {
        products: [],
        loadedData: false,
        from:  this.props.location.state.from,
        fromCurrentProduct: this.props.location.state.currentProduct,
        sumInCart: 0,
    }

    componentDidMount = () => {
        let products = JSON.parse(localStorage.getItem("cart"));
        console.log(products);

        let sum = 0;

        for(let i = 0; i < products.length; i++) {
        sum = sum + products[i].price;
        }
        console.log("sum i cart", sum);

        this.setState({ loadedData: true, products: products, sumInCart: sum })


    }

    backLink = () => {
        if(this.state.from === "product") {
          return "/webshop/" + this.state.fromCurrentProduct.name;
        }
        else if (this.state.from === "webshop") {
          return "/webshop";
        }
    }

    removeFromCart = (product) => {
        //console.log("product", product);

        let productsInLocalStorage = JSON.parse(localStorage.getItem("cart"));

        let findProduct = productsInLocalStorage.find((productsInLocalStorage) => productsInLocalStorage.id == product.id);
        console.log("findProduct", findProduct);

        //console.log(productsInLocalStorage.name.indexOf(findProduct.name)); 

        let newCartArray = productsInLocalStorage.filter(product => product.id != findProduct.id)
        console.log("newCartArray", newCartArray);

        localStorage.setItem("cart",  JSON.stringify(newCartArray))

        let currentSum = this.state.sumInCart;
        let newSum = currentSum - product.price;

        console.log("newSum", newSum);

        this.setState({ products: newCartArray, sumInCart: newSum })

    }

    render() {

        if(!this.state.loadedData) return <></>

        return (
            <>
                <Header />
                <section className='cartContainer'>
                    
                    <h2>Kundvagn</h2>

                    

                    {/* <Link className='backButton' to={"/webshop"} >Tillbaka</Link> */}
                    <Link className='backButton' to={{pathname: this.backLink(), state: {product: this.state.fromCurrentProduct}}} >Tillbaka</Link>

                    <table className=''>

                        <tbody>
                        {
                            this.state.products.map((product, i) => {
                            return (<tr key={i} >

                                <td className='nameAndImg' key={product.name}>{product.name} <img className='productImage' src={require(`./images/webshop/` + product.image + '.webp')}></img> </td>
                                
                                
                                <td key={product.price}>{product.price}kr</td>
                                <td><button onClick={() => this.removeFromCart(product)}>Ta bort</button></td>
                            </tr>
                            )
                            })
                        }
                        </tbody>

                    </table>

                    <p className='sum'>Summa: {this.state.sumInCart}kr</p>


                </section>
            </>
            
        )
    }
}

export default Cart;