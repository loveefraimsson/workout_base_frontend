import React, { Component } from 'react';
import '../styles/footer.scss';

export class Footer extends Component {

    state = {
        quote: [],
        loadedData: false
    }

    componentDidMount = () => {
        fetch('https://type.fit/api/quotes')
        .then((res) => res.json())
        .then((data) => {        
            console.log(data);

            let randomNumber = Math.floor(Math.random() * (1642 - 1) + 1);
            console.log("randomNumber", randomNumber);

            let quote = {
                quote: data[randomNumber].text,
                author: data[randomNumber].author
            }

            this.setState({ quote: quote, loadedData: true })

        })  
      }

    render() {
        if(!this.state.loadedData) return <></>
        return (
            <footer className='footer'>
                {/* <p>Footer</p> */}
                <section className='quoteSection'>
                    <p className='quote'>{this.state.quote.quote} </p>
                    
                    {
                        this.state.quote.author !== null ? (
                            <p className='author'>- {this.state.quote.author}</p>
                        ) : null
                    }
                </section>
                
            </footer>
        )
    }
}

export default Footer;