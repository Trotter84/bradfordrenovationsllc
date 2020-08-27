import React, { useEffect } from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { ScrollManager, WindowScroller } from 'react-scroll-manager';
import './App.css';

import TopMenu from './menus/TopMenu';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import Footer from './menus/Footer';
import BottomMenuMobile from './menus/BottomMenuMobile';


function App() { 

  useEffect(() => {
    document.title='Bradford Renovations LLC'
  }, [])

  const history = useHistory();

  return (
    <ScrollManager history={history}>
      <WindowScroller>
        <div id='mainAppContainer'>
          <div id='blackLayer'>
            <TopMenu />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={AboutUs} />
              <Route path='/testimonials' component={Testimonials} />
              <Route path='/contact-us' component={ContactUs} />
              <Route path='/careers' component={Careers} />
              <Redirect to='/' />
            </Switch>
            <BottomMenuMobile />
          </div>
        </div>
        <Footer />
      </WindowScroller>
    </ScrollManager>
  );
}

export default App;
