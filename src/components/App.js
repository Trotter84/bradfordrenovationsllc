import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  Router
} from 'react-router-dom';
import { ScrollManager, WindowScroller } from 'react-scroll-manager';
import { createBrowserHistory as createHistory } from 'history';
import './App.css';

import TopMenu from './menus/TopMenu';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import Footer from './menus/Footer';


class App extends Component {

  componentDidMount() {
    document.title='Bradford Renovations LLC'
  }

  constructor() {
    super();
    this.history = createHistory();
  }

  render() {
    return (
      <ScrollManager history={this.history}>
        <Router history={this.history}>
          <WindowScroller>
            <div id='mainAppContainer'>
              <TopMenu />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about-us' component={AboutUs} />
                <Route path='/contact-us' component={ContactUs} />
                <Route path='/careers' component={Careers} />
                <Redirect to='/' />
              </Switch>
            </div>
            <Footer />
          </WindowScroller>
        </Router>
      </ScrollManager>
    );
  }
}

export default App;
