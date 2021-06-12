import './App.css';

import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './components/Navbar/NavBar';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="">
        <NavBar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
