import React from 'react';
import {HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
