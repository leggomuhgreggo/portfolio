import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Container } from '../Scaffolding/Scaffolding.js';
import styled from 'styled-components';

const NavItem = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <li className={match ? 'active' : ''}>
        <Link to={to}>{label}</Link>
      </li>
    )}
  />
);

const NavList = () => (
  <ul className="nav-list">
    <NavItem to="/" label="Home" />
    <NavItem to="/work" label="Work" />
    <NavItem to="/about" label="About" />
    <li>
      <a href="https://github.com/leggomuhgreggo/">Github</a>
    </li>
  </ul>
);

const Nav_ = ({ ...props }) => (
  <nav {...props}>
    <Container type="fluid">
      <NavList />
    </Container>
  </nav>
);

const Nav = styled(Nav_)`
  display: flex;
  font-size: 11px;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 2.2rem;

  & + main{
    margin-top: 2.2rem;
  }

  ul{
    display: flex;
    align-items: flex-end;
    padding: 1.5rem 0 .3em 0;
    margin-left: -.5em;
    margin-right: -.5em;

    li{
      text-transform: uppercase;
      padding: .5em .8em;

      a{
        color: #FFF;
        text-decoration: none;
      }
    }
  }
`;

export default Nav;
