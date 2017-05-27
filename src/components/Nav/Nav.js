import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Scaffolding/Scaffolding.js';
import styled from 'styled-components';

const NavItem = props => (
  <li>
    <Link to={props.link}>{props.text}</Link>
  </li>
);

const NavList = props => (
  <ul className="nav-list">
    {props.navItems.map((item, key) => <NavItem key={key} {...item} />)}
  </ul>
);

const Nav_ = ({ navItems, ...rest }) => (
  <nav {...rest}>
    <Container type="fluid">
      <NavList navItems={navItems} />
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
