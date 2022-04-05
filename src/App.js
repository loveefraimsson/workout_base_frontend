import './App.css';
import Profilepage from './components/Profilepage';

import React, { Component } from 'react';
import Header from './components/Header';
import Startpage from './components/Startpage';
import Login from './components/Login';
import WorkoutBank from './components/WorkoutBank';
import TrainingProgram from './components/TrainingProgram';
import Footer from './components/Footer';
import Webshop from './components/Webshop';
import ExerciseCard from './components/ExerciseCard';
import Exercise from './components/Exercise';
import FavoriteExercises from './components/FavoriteExercises';

import './styles/App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



class App extends Component {

  state = {
    loadedData: false,
    exerciseArray: [],
    
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/exercises')
    .then((res) => res.json())
    .then((data) => {        
        console.log("data från App", data);
        //console.log(data[0].video);
        this.setState({ loadedData: true, exerciseArray: data})
    })  
  }
 
  render() {

    if(!this.state.loadedData) return <></>

    return (
      <>
      <section className="App">
        
        <section className='routing'>
          <Router>
            <Switch>
              <Route exact path="/" component={Startpage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/workoutbank" component={WorkoutBank} />
              <Route exact path="/profilepage" component={Profilepage} />
              <Route exact path="/trainingprogram" component={TrainingProgram} />
              <Route exact path="/webshop" component={Webshop} />
              <Route exact path="/workoutbank/:params" component={ExerciseCard} />
              <Route exact path="/workoutbank/:params/:params" component={Exercise} />

              <Route path="/favoriteexercises">
                <FavoriteExercises exerciseArrayFromApp={this.state.exerciseArray} />
              </Route>

              {/* <Route exact path="/favoriteexercises" component={FavoriteExercises} /> */}
            </Switch>
            
      

          </Router>

        </section>

        <Footer />

      </section>

      
      </>
        
   
    

    )
  }
}


export default App;
