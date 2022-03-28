import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import Header from './Header';
import ExerciseCard from './ExerciseCard';
import { Link } from 'react-router-dom';
import Categories from './Categories';

export class WorkoutBank extends Component {

    state = {
        loadedData: false,
        exerciseArray: [],
    }

    componentDidMount = () => {
        fetch('http://localhost:3001/exercises')
        .then((res) => res.json())
        .then((data) => {        
            //console.log(data);
            //console.log(data[0].video);
            this.setState({ loadedData: true, exerciseArray: data})
        })  
      }

    render() {


        if(!this.state.loadedData) return <></>

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
            <section>
                <Header />
                <h1>Övningsbank</h1>

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