import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../styles/App.scss';



const parse = require('html-react-parser');

export class Exercise extends Component {

    state = {
        exercise: this.props.location.state.exercise,
        category: this.props.location.state.category,
    }

  render() {
    return (
      <>
      <Header />
        <Link to={"/workoutbank"} >Tillbaka till övningsbanken</Link>
        <h1>{this.state.exercise.title}</h1>
        <p>{this.state.exercise.description1}</p>
        <p>{this.state.exercise.description2}</p>

        <img src={require(`./images/` + this.state.exercise.image + '.webp')}></img> <br />

        {/* {parse(this.state.exercise.video)} */}
      </>
    )
  }
}

export default Exercise;