import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";


class Login extends Component {

    state = {
        userName: '',
        password: '',
        isLoggedIn: false,
    }

    

    handleSubmit = (evt) => {
        evt.preventDefault();

        const userData = {
            userName: this.userName,
            password: this.password
        }

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
                this.setState({ isLoggedIn: true })
            }
            //If the loginin details is wrong
            else {
                localStorage.setItem("loggedIn", false);
                this.setState({ isLoggedIn: false })
            }
        });      

    }

    render() {

        if(this.state.isLoggedIn === true) {
            return <Redirect to="/" />
        }

        return (
            <section>
                <h3>Login page</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={e => this.userName = e.target.value} /> <br />
                        <input type="text" onChange={e => this.password = e.target.value} /> <br />
                        <button type='submit'>Logga in</button>                
                  </form>
            </section>
        )
    }
}


export default Login;