import {React, useState, useEffect} from 'react';
import ExerciseCard from './ExerciseCard';
import { Link } from 'react-router-dom';

function Categories(props) {

    const [category, setCategory] = useState(props.category);
    const [exerciseArray, setExerciseArray] = useState(props.exerciseArray);
  

  return (
    <>
        <Link key={category} to={{pathname:`/workoutbank/` + props.category, state: {exerciseArray: exerciseArray, category: category}}} >{category}</Link> <br />
        
    </>
  )
}

export default Categories;