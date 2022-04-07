import React, { Component } from 'react';
import Header from './Header';
import ExerciseCard from './ExerciseCard';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import heroImgWorkoutbank from "./images/heroImgWorkoutbank.png";
import Loader from './Loader';

import '../styles/workoutbank.scss';

export class WorkoutBank extends Component {

    state = {
        loadedData: false,
        exerciseArray: this.props.exerciseArray,
    }

    /* componentDidMount = () => {
        fetch(this.state.url + 'exercises')
        .then((res) => res.json())
        .then((data) => {        
            //console.log(data);
            //console.log(data[0].video);
            this.setState({ loadedData: true, exerciseArray: data})
        })  
    } */

    render() {


       /*  if(!this.state.loadedData) return <Loader /> */

        
        let allCategories = [];
        let exerciseArray = this.state.exerciseArray;
        let findCategory;

        //Loops through the exercises to push each category in an array, checks so the category not being pushed twice
        for(let i = 0; i < this.state.exerciseArray.length; i++) {         
            findCategory = allCategories.find((allCategories) => allCategories == exerciseArray[i].category);

            if(!findCategory) {
                allCategories.push(this.state.exerciseArray[i].category);
            }

            //console.log("allCategories", allCategories);
            
        }


        return (
            <section className='workoutbankContainer'>
                <Header />
                <h1>Övningsbank</h1>

                {/* Prints all categories */}
                {
                    allCategories.map((category) => {
                        return(                          
                            <Categories key={category} category={category} exerciseArray={this.state.exerciseArray} />
                        )
                    })
                }

            </section>
        )
    }
}

export default WorkoutBank;