import React, { Component } from 'react';
import Login from './Login';
import Header from './Header';
import { Link } from 'react-router-dom';


export class Startpage extends Component {
  
  render() {
    
    let isLoggedIn = localStorage.getItem('loggedIn');

    if(isLoggedIn === 'true') {
      return (
              <section>
                <Header />
                <h2>Hej {localStorage.getItem("userName")}!</h2>
                <Link to="trainingprogram">Träningsprogram</Link>
              </section>
            )
    }
    else {  return (
              <section>
                <Header />
                <h1>Startpage</h1>
                <Login />
              </section>
            )
    }


  }
}

export default Startpage;