import React, { Component } from 'react';
import './Header.scss';


import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export class Header extends Component {
  
  state = {
  
  }

  
  render() {

    let buttons;

    //LOGGED IN
    if(localStorage.getItem("userName") === "Sanna") {
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

    // <ul className='navbar-nav'>
    //   <li className='navItem'>
    //     <Link className="navLink" to="/login">Login</Link>
    //   </li>
    // </ul>
    
    return (
      <div>
          <h1>Header</h1>
          <nav className='navbar'>
            <div className='container'>
              {buttons}

            </div>

          
        </nav>
         
      </div>
    )
  }
}

export default Header;