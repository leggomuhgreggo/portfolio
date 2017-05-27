import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from 'styled-components';

import Nav from './components/Nav/Nav.js';
import SiteWrap from './components/SiteWrap/SiteWrap.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Work from './components/Work/Work.js';

const NAV_CONFIG = [
  {
    link: '/',
    text: 'Home'
  },
  {
    link: '/about',
    text: 'About'
  },
  {
    link: '/work',
    text: 'Work'
  },
  {
    link: '/github',
    text: 'Github'
  }
];

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 3rem 0 3rem;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <SiteWrap>
              <Nav navItems={NAV_CONFIG} />

              <CSSTransitionGroup
                component={Main}
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                <Switch location={location} key={location.key}>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/work" component={Work} />
                </Switch>
              </CSSTransitionGroup>
            </SiteWrap>
          )}
        />
      </Router>
    );
  }
}

export default App;
