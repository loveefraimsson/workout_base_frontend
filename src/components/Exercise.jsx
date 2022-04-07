import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../styles/exercise.scss';
import Loader from './Loader';



const parse = require('html-react-parser');

export class Exercise extends Component {

    state = {
        exercise: this.props.location.state.exercise,
        title: this.props.location.state.exercise.title,
        category: this.props.location.state.category,
        exerciseArray: this.props.location.state.exerciseArray,
        favoriteMarked: false,
        sets: '',
        reps: '',
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
          //console.log("data[0].favoriteExercises", data[0].favoriteExercises);
          this.setState({ loadedData: true })

          let favoriteExercises = data[0].favoriteExercises;
          let title = this.state.exercise.title;
          //console.log("title", title);


          //Checks if current exercise is marked as favorite, if it is in favorite exercises then sets state to true, otherwise not. Doing this to render the right button
          favoriteExercises.map((exercise, i) => {
            if(exercise.title === title) {
              //console.log("Rätt");
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

      //Sets the exercise to save in databse to object
      let favoriteExercise = {
        title: exerciseTitle,
        category: exerciseCategory,
        description1: this.state.exercise.description1,
        description2: this.state.exercise.description2,
        image: this.state.exercise.image,
        video: this.state.exercise.video,
        userName: localStorage.getItem("userName")
      }

      //console.log(favoriteExercise);
      
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
            //console.log("data", data);
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

      let addThisExercise = {
        title: this.state.title,
        category: this.state.category,
        sets: this.state.sets,
        reps: this.state.reps,
        userName: this.state.userName
      }
      console.log(addThisExercise);

      fetch("http://localhost:3001/addinprogram", {
          method: "post",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(addThisExercise)
        })
        .then(res => res.json())
        .then(data => {
            console.log("data", data);
            
        });
    }

  render() {
    if(!this.state.loadedData) return <></>

  

    return (
      <>
       
      <Header />
        <Link className='backButton' to={{pathname:`/workoutbank/` + this.state.exercise.category, state: {oneExercise: this.state.exercise, category: this.state.category, exerciseArray: this.state.exerciseArray}}} >Tillbaka</Link>
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