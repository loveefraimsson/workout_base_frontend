import React, { Component } from 'react';
import '../styles/login.scss';

import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";


class Login extends Component {

    state = {
        userName: '',
        password: '',
        isLoggedIn: '',
        printErrorMessage: ''
    }

    printErrorMessage = () => {
        if(this.state.printErrorMessage === true) {
            return <p className='errorMessage'>Fel användarnamn eller lösenord, vänligen försök igen!</p>;
        }
        else {
            return <p></p>;
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        const userData = {
            userName: this.userName,
            password: this.password
        }

        //Checks user against database
        fetch("http://localhost:3001/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {

            console.log(data);
            //If the login details is correct
           if(data.code === "Success") {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("userName", data.userName);
                this.setState({ isLoggedIn: true, loggedInUser: data.userName });
            }
            //If the loginin details is wrong
            else {
                localStorage.setItem("loggedIn", false);
                this.setState({ isLoggedIn: false, printErrorMessage: true });
                //document.getElementById("errorMessage").insertAdjacentHTML("beforeend", "<p>Fel</p>")
            }
        });      

    }

    render() {

        //Redirects if user logges in
        if(this.state.isLoggedIn === true) {
            return <Redirect to="/" />
        }
        

        return (
            <section>
                    <form className='loginForm' onSubmit={this.handleSubmit}>
                        <label htmlFor="userName">Användarnamn:</label> <br />
                        <input className='inputUserName' name='userName' type="text" onChange={e => this.userName = e.target.value} /> <br />
                        <label htmlFor="password">Lösenord:</label> <br />
                        <input className='inputPassword' name='password' type="text" onChange={e => this.password = e.target.value} /> <br />
                        <button className='loginBtn' type='submit'>Logga in</button>

                        {this.printErrorMessage()}     
                    </form>

            </section>
        )
    }
}


export default Login;