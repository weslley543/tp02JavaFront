import React, { Component } from 'react';
import {HashRouter, BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import './App.css';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Filme from './Pages/Filme/Filme';


import {isAuthenticated} from './Services/auth';

const PrivateRoute= ({ component: Component, ...rest}) => (
  <Route 
    {...rest}
    render={props => 
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: {from: props.location}}} />
      )}
  />
);

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/filme" component={Filme} />
        <PrivateRoute path="/home" component={Home} />
        <Route path="*" component={() => <h1>Not found</h1>} />
      </Switch>
    </HashRouter>
  );
}

export default App;
