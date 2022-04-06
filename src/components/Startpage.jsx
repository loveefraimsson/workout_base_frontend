import React, { Component } from 'react';
import Login from './Login';
import Header from './Header';
import { Link } from 'react-router-dom';

import '../styles/startpage.scss';


export class Startpage extends Component {
  
  render() {
    
    let isLoggedIn = localStorage.getItem('loggedIn');

    //If user is logged in:
    if(isLoggedIn === 'true') {
      return (
        <section>
          <Header />
          <h2 className='welcomeTitle'>Hej {localStorage.getItem("userName")}!</h2>
          <p>Snabbåtkomst:</p>
          <Link to="trainingprogram">Ditt träningsprogram</Link><br />
          <Link to="favoriteexercises">Dina favoritövningar</Link>
        </section>
      )
    }
    else {  
      return (
        //If user is logged out:
        <section>
          <Header />
          <h1 className='welcomeTitle'>Välkommen, vänligen logga in!</h1>
          <Login />
          
        </section>
      )
    }


  }
}

export default Startpage;