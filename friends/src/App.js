import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/login'
import FriendsList from './components/friendsList'
import PrivateRoute from './components/privateRoute'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <PrivateRoute exact path="/friends" component={FriendsList} />
      <Route path="/login" component={Login} />
        <Route>
          <Login />
        </Route>
      </Switch>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friends">Friends List</Link>
        </li>
      </ul>
    </div>
    </Router>
  );
}

export default App;