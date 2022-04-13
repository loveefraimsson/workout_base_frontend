import {React, useState, useEffect} from 'react';
import ExerciseCard from './ExerciseCard';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../styles/categories.scss';


function Categories(props) {

    const [category, setCategory] = useState(props.category);
    const [exerciseArray, setExerciseArray] = useState(props.exerciseArray);

    function scroll() {
      window.scrollTo({ top:0, behavior:'smooth' });
    }
    

  return (
      <>
          <Link onClick={scroll}  className='categoryBox' key={category} to={{pathname:`/workoutbank/` + props.category, state: {exerciseArray: exerciseArray, category: category}}} >{category}</Link>
      </>
  )
}

export default Categories;