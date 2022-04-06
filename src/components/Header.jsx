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
    animationCloseMenu: '',
    animationShowMenu: '',
  }
  
  //Shows and hides menu
  handleMenu = () => {
    if(this.state.showMenu === false) {
      this.setState({ showMenu: true, animationShowMenu: "animationShowMenu", animationCloseMenu: "" })
    }
    else {    
        this.setState({ animationCloseMenu: "animationCloseMenu", animationShowMenu: ""})
      
        setTimeout(() => {
          this.setState({showMenu: false })
        }, 300) 
    }
  }

 
  render() {

    let buttons;
    //HEADER IF LOGGED IN
    if(localStorage.getItem("loggedIn") === "true") {
      buttons = (
        <section className='toggleContainer'>

          {this.state.showMenu ? (
            <img src={crossIcon} onClick={this.handleMenu} alt="" />
          ) : <img src={hamburgerIcon} onClick={this.handleMenu} alt="" />

          }

            {this.state.showMenu ? (
              <ul className={`navbar-nav ` + this.state.animationCloseMenu + this.state.animationShowMenu}>
                <li className='navItem'>
                  <Link className="navLink" to="/profilepage" >Profilsida</Link>           
                </li>

                <li className='navItem'>
                  <Link className="navLink" to="/workoutbank" >Övningar</Link>
                </li>

                <li className='navItem'>
                  <Link className="navLink" to="/webshop" >Webshop</Link>
                </li>

                <li className='navItem'>
                  <Link className="navLink" to="/" onClick={() => localStorage.clear()}>Logga ut</Link>
                </li>
              </ul>
              ) : null

            }
          
          
        </section>
        
      )
    }

    //HEADER IF LOGGED OUT
    else {
      buttons = null;
    }
    
    return (
      <header className='header'>
          <Link to={"/"}><img className='logo' src={logo} alt="WorkoutBase-logo" /></Link>
         
          <nav className='navbarContainer'>
              {buttons}

          </nav>
       
      </header>
    )
  }
}

export default Header;