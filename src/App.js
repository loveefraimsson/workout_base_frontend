import './App.css';
import Header from './components/Header';
//import facepull from './images/facepull.webp';
import facepull from './images/facepull.webp';

import React, { Component } from 'react'

class App extends Component {

  state = {
    exerciseArray: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/exercises')
    .then((res) => res.json())
    .then((data) => {        
        console.log(data);
        console.log(data[0].video);
        this.setState({ exerciseArray: data})
    })  
  }
 
  render() {
    

    return (
      <div className="App">
        <h1>Startsida</h1>

       
      

        {
          this.state.exerciseArray.map((exercise) => {
            {/* <p key={exercise.title}>{exercise.title}</p> */}
            return <img key={1} src={`./images/` + exercise.image + '.webp'}></img>
            // <div>{exercise.video}</div>
            
                    
            
            
          })
        }

      </div>
    )
  }
}


export default App;
