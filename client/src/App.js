import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import About from "./components/About.js"

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route path="/writing">
            <Writing />
          </Route>
          <Route path="/doings">
            <Doings />
          </Route>
          <Route path="/peculiarities">
            <Pecularities />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <div class="container">
        <nav>
          <input type="checkbox" id="nav" class="hidden"></input>
          <label for="nav" class="nav-btn">
            <i></i>
            <i></i>
            <i></i>
          </label>
          <div class="me">
            <a href="/">Jamie Fu</a>
          </div>
          <div class="nav-wrapper">
            <ul>
              <li><a href="/doings">Doing & Dones</a></li>
              <li><a href="/writing">Writing</a></li>
              <li><a href="/peculiarities">Pecularities</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}



function Writing() {
  return (
    <div>
      Writing
    </div>
  );
}

function Doings() {
  return (
    <div>
      Doing & Dones
    </div>
  );
}

function Pecularities() {
  return (
    <div>
      Pecularities
    </div>
  );
}

export default App;
