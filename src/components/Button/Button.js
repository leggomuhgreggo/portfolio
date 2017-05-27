// import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 2.4rem;
  background-color: transparent;
  border: 0;
  color: inherit;
  display: inline-block;
  width: auto;
  padding: 0;
  border: solid 1px white;
  border-radius: 1px;
  padding: calc( -.275vw + .7em ) 1em;
  font-size: .835rem;
  transition: all .1s ease;
  display: flex;
  line-height: 1;

  a{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
  }

  &:hover{
    background: white;
    &, a {color: #333;}
  }
`;
export default Button;
