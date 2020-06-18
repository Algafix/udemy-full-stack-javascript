import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home.js';
import About from './components/Pages/About.js';
import Contact from './components/Pages/Contact.js';
import AdminWrapper from './components/AdminWrapper.js';
import Login from './components/Pages/Login.js';

class App extends Component {
  render() {
    return (
      <Router>
          <Route
            path="/admin"
            render={props => (
              <AdminWrapper>
                <Login />
              </AdminWrapper>
            )}
          />
        
          <Route
            exact={true}
            path="/"
            render={props => (
              <PageWrapper>
                <Home {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/about"
            render={props => (
              <PageWrapper>
                <About {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path="/contact"
            render={props => (
              <PageWrapper>
                <Contact {...props} />
              </PageWrapper>
            )}
          />
      </Router>
    );
  }
}

export default App;
