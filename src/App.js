import './App.css';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/NavBar';
import urlConfig from './config/urlConfig';

class App extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Router>
        <div>
          {/* Navigation Links */}
          <Navbar />

          {/* Route Switch */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            {/* Add more routes here if needed */}
            <Route component={urlConfig.notFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
