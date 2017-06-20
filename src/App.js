import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled, { injectGlobal } from 'styled-components';

import bgimg from './simple_dashed.png';

import Nav from './components/Nav/Nav.js';
import SiteWrap from './components/SiteWrap/SiteWrap.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Work from './components/Work/Work.js';
import Resume from './components/Resume/Resume.js';

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 3rem 0 3rem;
`;

injectGlobal`
  body, html {
    background-image: url(${bgimg});
  }
`;

class App extends Component {
  render() {
    return (
      <Router>

        <Route
          render={({ location }) =>
            <Switch location={location} key={location.key}>
              <Route path="/resume" component={Resume} />
              <SiteWrap>
                <Nav />

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
            </Switch>}
        />
      </Router>
    );
  }
}

export default App;
