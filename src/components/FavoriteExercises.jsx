import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../styles/favoriteExercises.scss';



export class FavoriteExercises extends Component {

  state = {
    loadedData: false,
    userName: localStorage.getItem("userName"),
    favoriteExercises: [],
    exerciseArrayFromApp: this.props.exerciseArrayFromApp,
    url: this.props.url
  }

  componentDidMount = () => {

    fetch(this.state.url + "favoriteexercises", {
      method: "post",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({userName: this.state.userName})
    })
    .then(res => res.json())
    .then(data => {
        //console.log(data[0].favoriteExercises);
        this.setState({ loadedData: true, favoriteExercises: data[0].favoriteExercises })
    }); 
  }

  removeFavorite = (exercise) => {
    //console.log(exercise.exerciseTitle);

    let objectToRemove = {
      title: exercise.title,
      category: exercise.category,
      description1: exercise.description1,
      description2: exercise.description2,
      image: exercise.image,
      video: exercise.video,
      userName: this.state.userName
    }

    console.log(objectToRemove);

    fetch(this.state.url + "removeexercise", {
      method: "post",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(objectToRemove)
      })
    .then(res => res.json())
    .then(data => {
        console.log("data", data);
        this.setState({ favoriteExercises: data })
    });
  }


  render() {

    if(!this.state.loadedData) return <></>

    return (
      <section className='favoriteExercisesContainer'>
        <Header />
        <h1>Här är dina favoritmarkerade övningar:</h1>
        <table className='favoriteExercises'>

            <thead>
              <tr>
                <th>Övning</th>
                <th>Kategori</th>
                <th>Avmarkera från favoritlista</th>
              </tr>
              
            </thead>

          <tbody>
          {
            this.state.favoriteExercises.map((exercise, i) => {
              return (<tr key={i} >

                <td className='exerciseTitle' key={exercise.title}><Link to={{pathname:`/workoutbank/` + exercise.category + "/" + exercise.title, state: {exercise: exercise, category: exercise.category, favoriteMarked: true}}} >{exercise.title}</Link></td>
                
                
                <td key={exercise.category}>{exercise.category}</td>
                <td><button onClick={() => this.removeFavorite(exercise)}>Ta bort</button></td>
              </tr>
              )
            })
          }
          </tbody>

        </table>

      </section>
    )
  }
}

export default FavoriteExercises;