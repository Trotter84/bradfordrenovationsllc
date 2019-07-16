import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  Router
} from 'react-router-dom';
import { ScrollManager, WindowScroller } from 'react-scroll-manager';
import { createBrowserHistory as createHistory } from 'history';
import TopMenu from './Menus/TopMenu.js';
import Home from './Pages/Home.js';
import AboutUs from './Pages/AboutUs.js';
import Contact from './Pages/Contact.js';
import '../App.css';


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
                <Route path='/contact' component={Contact} />
                <Redirect to='/' />
              </Switch>
            </div>
          </WindowScroller>
        </Router>
      </ScrollManager>
    );
  }
}

export default App;
