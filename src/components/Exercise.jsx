import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../styles/exercise.scss';



const parse = require('html-react-parser');

export class Exercise extends Component {

    state = {
        exercise: this.props.location.state.exercise,
        title: this.props.location.state.exercise.title,
        category: this.props.location.state.category,
        favorite: false,
        sets: '',
        reps: '',
    }

    handleChange = (evt) => {
      //console.log("name", evt.target.name);
      //console.log("value", evt.target.value);
      //let exerciseTitle = this.state.exercise.title;
      //let exerciseCategory = this.state.category;

      this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit = (evt) => {
      evt.preventDefault();

      let exerciseTitle = this.state.title;
      let exerciseCategory = this.state.category;
      let sets = this.state.sets;
      let reps = this.state.reps;

      console.log("exerciseTitle", exerciseTitle);
      console.log("exerciseCategory", exerciseCategory);
      console.log("sets", sets);
      console.log("reps", reps);
    }

    
    favoriteMark = () => {
      let exerciseTitle = this.state.exercise.title;
      let exerciseCategory = this.state.category;
      //console.log(exerciseTitle);
      //console.log(exerciseCategory);

      this.setState({ favorite: true })

    }

  render() {
    return (
      <>
      <Header />
        <Link className='backButton' to={"/workoutbank"} >Tillbaka till övningsbanken</Link>
        <h1>{this.state.exercise.title}</h1>
        
        <form className='trainingProgramForm' onSubmit={this.handleSubmit}>
          <p>Vill du spara denna övningen i ditt träningsprogram? Fyll i uppgifter nedan:</p>
          <input name='sets' type="text" placeholder='Sets' onChange={this.handleChange} /> 
          <input name='reps' type="text" placeholder='Reps' onChange={this.handleChange} /><br />
          <button type='submit'>Spara</button>
        </form>

        <button className='favoriteButton' onClick={this.favoriteMark}>Favoritmarkera</button>

        <p>{this.state.exercise.description1}</p>
        <p>{this.state.exercise.description2}</p>

        <img src={require(`./images/exercises/` + this.state.exercise.image + '.webp')}></img> <br />

        {parse(this.state.exercise.video)}
      </>
    )
  }
}

export default Exercise;