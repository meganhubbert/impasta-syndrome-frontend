import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';
import AddRecipeForm from './components/AddRecipeForm';

class App extends React.Component {

  state = {

  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
    console.log(userInfo)
  }

  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === '/'){
      return <Form 
        formName= "log in"
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === '/signup') {
      return <Form 
        formName= "create an account"
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }


  renderHome = (routerProps) => {
    return <Home username={this.state.username} />
  }

  render() {
    return (
        <div className="app">
          <Switch>
            <Route exact path="/" render={this.renderForm} />
            <Route path="/signup" render={this.renderForm} />
            <Route path="/home" render={this.renderHome} />
            <Route path="/new-recipe" component={AddRecipeForm} />
            <Route render={ () => <p>Page not Found</p> } />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
