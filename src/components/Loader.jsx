import React, { Component } from 'react';
import loader from "./images/loader.gif";
import Header from './Header';
import '../styles/loader.scss';


export class Loader extends Component {
  render() {
    return (
        <>
            <Header />
            <img className='loader' src={loader} alt="Loader" />
        </>
    )
  }
}

export default Loader;