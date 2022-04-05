import React, { Component } from 'react';
import Header from './Header';
import '../styles/profilePage.scss';

import { Link } from 'react-router-dom';


export class Profilepage extends Component {
  render() {
    return (
      <section className='profilePage'>
          <Header />
          <h2 className='welcomeTitleProfile'>Hej {localStorage.getItem("userName")}!</h2>
          <p>Här är din profilsida där du kan komma åt ditt träningsprogram och dina favoritövningar.</p>
          <Link to="trainingprogram">Ditt träningsprogram</Link><br />
          <Link to="favoriteexercises">Dina favoritövningar</Link>
          

      </section>
    )
  }
}

export default Profilepage;