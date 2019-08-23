import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  Router
} from 'react-router-dom';
import { ScrollManager, WindowScroller } from 'react-scroll-manager';
import { createBrowserHistory as createHistory } from 'history';
import '../App.css';

import TopMenu from './menus/TopMenu.js';
import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';
import ContactUs from './pages/ContactUs.js';
import Careers from './pages/Careers.js';
import Footer from './menus/Footer.js';


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
            <div>
              <TopMenu />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about-us' component={AboutUs} />
                <Route path='/contact-us' component={ContactUs} />
                <Route path='/careers' component={Careers} />
                <Redirect to='/' />
              </Switch>
              <Footer />
            </div>
          </WindowScroller>
        </Router>
      </ScrollManager>
    );
  }
}

export default App;
