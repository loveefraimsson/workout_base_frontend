import React, { Component } from 'react';
import '../styles/header.scss';
import '../styles/mediaQuerie.scss';

import logo from "../images/logo.png";
import hamburgerIcon from "../images/hamburgerIcon.png";
import crossIcon from "../images/crossIcon.png";

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";



export class Header extends Component {

  state = {
    showMenu: false,
  }
  
  handleMenu = () => {
    if(this.state.showMenu === false) {
      this.setState({ showMenu: true })
    }
    else {
      this.setState({ showMenu: false })
    }
  }

 
  render() {

    let buttons;

    //LOGGED IN
    if(localStorage.getItem("loggedIn") === "true") {
      buttons = (
        <section className='toggleContainer'>

          
            <img src={hamburgerIcon} onClick={this.handleMenu} alt="" />
            {/* <img src={crossIcon} alt="" /> */}
          

            {this.state.showMenu ? (
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
              </ul>
              ) : null

            }
          
          
        </section>
        
      )
    }

    //LOGGED OUT
    else {
      buttons = null;
    }
    
    return (
      <header className='header'>
          <img className='logo' src={logo} alt="WorkoutBase-logo" />
         
          <nav className='navbarContainer'>
              {buttons}

          </nav>
          
         
      </header>
    )
  }
}

export default Header;