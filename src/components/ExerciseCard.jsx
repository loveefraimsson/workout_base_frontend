import React, { Component, useEffect, useState } from 'react';
import Exercise from './Exercise';

import { Link } from 'react-router-dom';

{/* <NU></NU>
Ä<NDRAR>
<JAG></JAG></NDRAR> */}


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
      <section>

        {specificExercises.map((exercise) => {
          return <Link key={exercise.title} to={{pathname:`/workoutbank/` + this.state.category + "/" + exercise.title, state: {exercise: exercise}}} >{exercise.title}</Link>
        })

        }
  
          
          {/* <Link to={{pathname:`/workoutbank/` + exercise.title, state: {exercise: exercise}}} >{exercise.title}</Link> */}
      </section>
    )
  }
  
  
  
}

export default ExerciseCard;
