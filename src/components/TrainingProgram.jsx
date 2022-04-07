import React, { Component } from 'react';
import Header from './Header';
import '../styles/trainingProgram.scss';

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
              console.log("traningprogram from DB:", data);
              this.setState({ loadedData: true, trainingProgram: data })
          });
    }

    removeFromProgram = (exercise) => {
        console.log(exercise);
    }


    render() {
        //if(!this.state.loadedData) return <></>


        return (
            <section className='trainingProgramContainer'>
                <Header />
                <h2>Här ser du ditt träningsprogram som du har skapat!</h2>

                <table className='trainingProgram'>

            <thead>
              <tr>
                <th>Övning</th>
                <th>Kategori</th>
                <th>Sets</th>
                <th>Reps</th>                
                <th>Avmarkera från favoritlista</th>
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