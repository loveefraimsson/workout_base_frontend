import React, { Component } from 'react';
import '../styles/header.scss';

import logo from "../images/logo.png";


import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export class Header extends Component {
  
  

  
  render() {

    let buttons;

    //LOGGED IN
    if(localStorage.getItem("loggedIn") === "true") {
      buttons = (
        <ul className='navbar-nav'>
          <li className='navItem'>
            <Link className="navLink" to="/profilepage" >Profilsida</Link>           
          </li>

           <li className='navItem'>
            <Link className="navLink" to="/workoutbank" >Övningar</Link>
          </li>

          <li className='navItem'>
            <Link className="navLink" to="/" onClick={() => localStorage.clear()}>Logout</Link>
          </li>
        </ul>)
    }

    //LOGGED OUT
    else {
      buttons = null;
    }
    
    return (
      <header className='header'>
          <img className='logo' src={logo} alt="WorkoutBase-logo" />
          
          <nav className='navbarContainer'>
            <section className='navbar'>
              {buttons}
            </section>

          </nav>
          
         
      </header>
    )
  }
}

export default Header;