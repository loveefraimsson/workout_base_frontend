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
        favoriteMarked: false,
        sets: '',
        reps: '',
        isNumber: '',
        userName: localStorage.getItem("userName"),
        favoriteExercises: [],
        loadedData: false,
    }

    //Gets all favorite exercises
    componentDidMount = () => {
      fetch("http://localhost:3001/favoriteexercises", {
      method: "post",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({userName: this.state.userName})
      })
      .then(res => res.json())
      .then(data => {
          //console.log(data[0].favoriteExercises);
          this.setState({ loadedData: true })

          let favoriteExercises = data[0].favoriteExercises;
          let title = this.state.exercise.title;


          //Checks if current exercise is marked as favorite, if it is in favorite exercises then sets state to true, otherwise to false
          favoriteExercises.map((exercise, i) => {
            if(exercise.exerciseTitle === title) {
              console.log("Rätt");
              this.setState({ favoriteMarked: true })
            }
            else {
              //this.setState({ favoriteMarked: false })
            }
          })
      }); 
    }


    
    favoriteMarkToggle = () => {
      let exerciseTitle = this.state.exercise.title;
      let exerciseCategory = this.state.category;

      let favoriteExercise = {
        exerciseTitle: exerciseTitle,
        exerciseCategory: exerciseCategory,
        userName: localStorage.getItem("userName")
      }
      
      //Saves exercise as favorite in database
      if(this.state.favoriteMarked === false) {

        this.setState({ favoriteMarked: true })

        fetch("http://localhost:3001/savefavorite", {
          method: "post",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(favoriteExercise)
        })
        .then(res => res.json())
        .then(data => {
            console.log("data", data);
            //this.setState({ favoriteExercises: data })
        });
      }

      //Removes exercise from favorite in database
      else {
        this.setState({ favoriteMarked: false });

        fetch("http://localhost:3001/removeexercise", {
          method: "post",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(favoriteExercise)
        })
        .then(res => res.json())
        .then(data => {
            //console.log("data", data);
        });

      }
    }






    handleChange = (evt) => {
      //console.log("name", evt.target.name);
      //console.log("value", evt.target.value);
      //let exerciseTitle = this.state.exercise.title;
      //let exerciseCategory = this.state.category;

      this.setState({ [evt.target.name]: evt.target.value });
    }

    saveInProgram = (evt) => {
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

  render() {
    if(!this.state.loadedData) return <></>

  

    return (
      <>
       
      <Header />
        <Link className='backButton' to={"/workoutbank"} >Tillbaka till övningsbanken</Link>
        <h1>{this.state.exercise.title}</h1>
        
        <form className='trainingProgramForm' onSubmit={this.saveInProgram}>
          <p>Vill du spara denna övningen i ditt träningsprogram? Fyll i uppgifter nedan med siffror:</p>
          <input name='sets' type="number" placeholder='Sets; ex. 1' onChange={this.handleChange} /> 
          <input name='reps' type="number" placeholder='Reps; ex. 4' onChange={this.handleChange} /><br />
          <button type='submit'>Spara</button>
        </form>

        {this.state.favoriteMarked ? (
          <button className='favoriteButton' onClick={this.favoriteMarkToggle}>Ta bort favoritmarkering</button>
        ): <button className='favoriteButton' onClick={this.favoriteMarkToggle}>Favoritmarkera</button>

        }


        <p>{this.state.exercise.description1}</p>
        <p>{this.state.exercise.description2}</p>

        <img src={require(`./images/exercises/` + this.state.exercise.image + '.webp')}></img> <br />

        {parse(this.state.exercise.video)}
      </>
    )
  }
}

export default Exercise;