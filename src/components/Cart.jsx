import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


import '../styles/cart.scss';

export class Cart extends Component {

    state = {
        products: [],
        loadedData: false,
        from:  this.props.location.state.from,
        fromCurrentProduct: this.props.location.state.currentProduct
    }

    componentDidMount = () => {
        let products = JSON.parse(localStorage.getItem("cart"));
        console.log(products);
        this.setState({ loadedData: true, products: products })
    }

    backLink = () => {
        if(this.state.from === "product") {
          return "/webshop/" + this.state.fromCurrentProduct.name;
        }
        else if (this.state.from === "webshop") {
          return "/webshop";
        }
      }

    render() {

        if(!this.state.loadedData) return <></>

        return (
            <section className='cartContainer'>
                <Header />
                <h2>Kundvagn</h2>

                

                {/* <Link className='backButton' to={"/webshop"} >Tillbaka</Link> */}
                <Link className='backButton' to={{pathname: this.backLink(), state: {product: this.state.fromCurrentProduct}}} >Tillbaka</Link>

                <table className=''>

                    <tbody>
                    {
                        this.state.products.map((product, i) => {
                        return (<tr key={i} >

                            <td className='' key={product.name}>{product.name} <img className='productImage' src={require(`./images/webshop/` + product.image + '.webp')}></img> </td>
                            
                            
                            <td key={product.price}>{product.price}</td>
                            <td><button>Ta bort</button></td>
                        </tr>
                        )
                        })
                    }
                    </tbody>

                </table>


            </section>
            
        )
    }
}

export default Cart;