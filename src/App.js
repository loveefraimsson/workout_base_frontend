import './App.css';
import Profilepage from './components/Profilepage';
//import facepull from './images/facepull.webp';
import facepull from './images/facepull.webp';

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

import './styles/App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const parse = require('html-react-parser');

class App extends Component {

  

  

  
 
  render() {

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
