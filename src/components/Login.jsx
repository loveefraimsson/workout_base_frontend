import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";


class Login extends Component {

    state = {
        userName: ''
    }

    

    handleSubmit = (evt) => {
        evt.preventDefault();

        const data = {
            userName: this.userName,
            password: this.password
        }
        //console.log(data);

        localStorage.setItem("userName", data.userName);

        //DETTA STATET SKA BARA SÄTTAS OM INLLOGGNINGSUPPGIFTERNA ÄR RÄTT.
        //KANSKE INTE SÄTTA "SANNA" UTAN TRUE ELLER FALSE
        this.setState({ userName: data.userName })
    }

    render() {


        if(this.state.userName === "Sanna") {
            return <Redirect to="/" />
        }

        return (
            <div>
                <h3>Login page</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={e => this.userName = e.target.value} /> <br />
                        <input type="text" onChange={e => this.password = e.target.value} /> <br />
                        <button type='submit'>Logga in</button>                
                  </form>
            </div>
        )
    }
}


export default Login;