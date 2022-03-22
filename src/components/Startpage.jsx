import React, { Component } from 'react';
import Login from './Login';
import Header from './Header';
import { Link } from 'react-router-dom';

import '../styles/startpage.scss';


export class Startpage extends Component {
  
  render() {
    
    let isLoggedIn = localStorage.getItem('loggedIn');

    if(isLoggedIn === 'true') {
      return (
        <section>
          <Header />
          <h2 className='welcomeTitle'>Hej {localStorage.getItem("userName")}!</h2>
          <Link to="trainingprogram">Träningsprogram</Link>
        </section>
      )
    }
    else {  
      return (
        <section>
          <Header />
          <h1 className='welcomeTitle'>Välkommen, vänligen logga in!</h1>
          <Login />
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p> */}
        </section>
      )
    }


  }
}

export default Startpage;