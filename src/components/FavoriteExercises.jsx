import React, { Component } from 'react';
import Header from './Header';
import '../styles/favoriteExercises.scss';

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
      <section className='favoriteExercisesContainer'>
        <Header />
        <h1>FavoriteExercises</h1>
        <table className='favoriteExercises'>

            <thead>
              <tr>
                <th>Övning</th>
                <th>Kategori</th>
                <th>Avmakera från favorit</th>
              </tr>
              
            </thead>

          <tbody>
          {
            this.state.favoriteExercises.map((exercise, i) => {
              return (<tr key={i} >
                <td className='exerciseTitle' key={exercise.exerciseTitle}>{exercise.exerciseTitle}</td>
                <td key={exercise.exerciseCategory}>{exercise.exerciseCategory}</td>
                <td><button>Ta bort</button></td>
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