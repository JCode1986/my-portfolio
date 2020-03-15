import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './Components/Home/Home.js'
import Header from './Components/Header/Header.js'
import Accomplishments from './Components/Accomplishments/Accomplishments.js'
import About from './Components/About/About.js'
import Nav from './Components/Nav/Nav.js'
import Footer from './Components/Footer/Footer.js'
import './App.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    }
  }

  render() {

    return (
      <Router>
        <div>
          <Header/>
          <Nav/>
            <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/accomplishments">
                  <Accomplishments/>
                </Route>
                <Route exact path="/about">
                  <About/>
                </Route>
            </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
