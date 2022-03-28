import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Exercise extends Component {

    state = {
        exercise: this.props.location.state.exercise,
        category: this.props.location.state.category,
    }

  render() {
    return (
      <>
        <Link to={"/workoutbank"} >Tillbaka till övningsbanken</Link>
        <h1>NAMN PÅ KLICKAD ÖVNING: {this.state.exercise.title}</h1>
      </>
    )
  }
}

export default Exercise;