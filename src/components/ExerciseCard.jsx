import React, { Component, useEffect, useState } from 'react';
import Exercise from './Exercise';
import Header from './Header';
import { Link } from 'react-router-dom';

import '../styles/exerciseCard.scss';



class ExerciseCard extends Component {

  state = {
    category: this.props.location.state.category,
    exerciseArray: this.props.location.state.exerciseArray,

  }


  render() {

    let exerciseArray = this.state.exerciseArray;
    let specificExercises = [];

    exerciseArray.map((exercise) => {
      if (exercise.category === this.state.category) {
        specificExercises.push(exercise);
      }
    })
    //console.log(specificExercises);

    return (
      <>
        <Header />
        <section className='exerciseContainer'>
          {specificExercises.map((exercise) => {
            return (
              <section className='card'>
                <Link className='cardLink' key={exercise.title} to={{pathname:`/workoutbank/` + this.state.category + "/" + exercise.title, state: {exercise: exercise, category: this.state.category}}} >{exercise.title}</Link>
              </section>)
          })

          }
        </section>
      </>
    )
  }
  
  
  
}

export default ExerciseCard;
