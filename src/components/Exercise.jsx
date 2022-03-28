import React, { Component } from 'react';

export class Exercise extends Component {

    state = {
        exercise: this.props.location.state.exercise
    }

  render() {
    return (
      <h1>NAMN PÅ KLICKAD ÖVNING: {this.state.exercise.title}</h1>
    )
  }
}

export default Exercise;