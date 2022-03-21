import React, { Component } from 'react';
import Login from './Login';
import Header from './Header';
import { Link } from 'react-router-dom';


export class Startpage extends Component {
  

  render() {
    
    //let isUserName = localStorage.getItem('userName');
    let isLoggedIn = localStorage.getItem('loggedIn');

    //KANSKE INTE SANNA UTAN TOMT ELLER INTE
   /*  if(isUserName === 'Sanna') { */
    if(isLoggedIn === 'true') {
      return (
              <>
                <Header />
                <h2>Hej</h2>
                <Link to="trainingprogram">Träningsprogram</Link>
              </>
            )
    }
    else {  return (
              <div>
                <Header />
                <h1>Startpage</h1>
                <Login />
              </div>
            )
    }


  }
  }

export default Startpage;