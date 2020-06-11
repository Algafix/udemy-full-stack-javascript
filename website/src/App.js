import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home.js';
import About from './components/Pages/About.js';
import Contact from './components/Pages/Contact.js';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route
            exact={true}
            path="/"
            component={Home}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="/contact"
            component={Contact}
          />

        </PageWrapper>
      </Router>
    );
  }
}

export default App;
