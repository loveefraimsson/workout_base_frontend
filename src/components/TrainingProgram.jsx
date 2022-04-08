import React, { Component } from 'react';
import Header from './Header';
import '../styles/trainingProgram.scss';
import { Link } from 'react-router-dom';

export class TrainingProgram extends Component {

    state = {
      url: this.props.url,
      userName: localStorage.getItem("userName"),
      trainingProgram: [],
    }

    componentDidMount = () => {
        fetch(this.state.url + "trainingprogram", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({userName: this.state.userName})
          })
          .then(res => res.json())
          .then(data => {
            //console.log("traningprogram from DB:", data);
            this.setState({ loadedData: true, trainingProgram: data })
          });
    }

    removeFromProgram = (exercise) => {
    
      let exerciseToRemove = {
        title: exercise.title,
        category: exercise.category,
        sets: exercise.sets,
        reps: exercise.reps,
        comments: exercise.comments,
        userName: this.state.userName
      }
      //console.log(exerciseToRemove);

      fetch(this.state.url + "removefromtrainingprogram", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(exerciseToRemove)
        })
      .then(res => res.json())
      .then(data => {
          console.log("data tillbaka", data);
          this.setState({ trainingProgram: data })
      });

    }


    render() {
      //if(!this.state.loadedData) return <></>


      return (
        <section className='trainingProgramContainer'>
          <Header />

          <Link className='backButton' to="/profilepage">Tillbaka</Link>

          <h2>Här ser du ditt träningsprogram som du har skapat!</h2>

          <table className='trainingProgram'>

            <thead>
              <tr>
                <th>Övning</th>
                <th>Kategori</th>
                <th>Sets</th>
                <th>Reps</th> 
                <th>Kommentarer</th>               
                <th>Ta bort från träningsprogram</th>
              </tr>
              
            </thead>

            <tbody>
              {
                this.state.trainingProgram.map((exercise, i) => {
                  return (<tr key={i} >

                    <td className='exerciseTitle' key={exercise.title}>{exercise.title}</td>
                    
                    
                    <td key={exercise.category}>{exercise.category}</td>

                    <td key={exercise.sets}>{exercise.sets}</td>

                    <td key={exercise.reps}>{exercise.reps}</td>
                    <td key={exercise.comments}>{exercise.comments}</td>

                    <td><button onClick={() => this.removeFromProgram(exercise)}>Ta bort</button></td>
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

export default TrainingProgram;