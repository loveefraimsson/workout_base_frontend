import {React, useState, useEffect} from 'react';
import ExerciseCard from './ExerciseCard';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../styles/categories.scss';


function Categories(props) {

    const [category, setCategory] = useState(props.category);
    const [exerciseArray, setExerciseArray] = useState(props.exerciseArray);
  

  return (
      <>
        <section className='categoryBox'>
          <Link className='categoryLink' key={category} to={{pathname:`/workoutbank/` + props.category, state: {exerciseArray: exerciseArray, category: category}}} >{category}</Link>
        </section>
      </>
  )
}

export default Categories;