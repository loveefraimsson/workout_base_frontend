import React, { Component } from 'react';
import Header from './Header';

export class FavoriteExercises extends Component {

  state = {
    loadedData: false,
    userName: localStorage.getItem("userName"),
    favoriteExercises: []
  }

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
        console.log(data[0].favoriteExercises);
        this.setState({ loadedData: true, favoriteExercises: data[0].favoriteExercises })
    }); 


    /* fetch('http://localhost:3001/favoriteexercises', this.state.userName)
    .then((res) => res.json())
    .then((data) => {        
        console.log(data);
    })   */
  }

  render() {

    if(!this.state.loadedData) return <></>

    return (
      <section>
        <Header />
        <h1>FavoriteExercises</h1>

        {
          this.state.favoriteExercises.map((exercise, i) => {
            return (<>
              <p key={exercise.exerciseTitle}>{exercise.exerciseTitle}</p>
              <p key={i}>{exercise.exerciseCategory}</p>
            </>
            )
          })
        }

      </section>
    )
  }
}

export default FavoriteExercises;