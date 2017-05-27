import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container, Row, Section } from '../Scaffolding/Scaffolding.js';
import Button from '../Button/Button.js';

const Title_ = props => (
  <div {...props}>
    <h1 className="greeting">Hello</h1>
    <div className="tagline">

      My name is Greg. I like to make
      {' '}
      <Link className="fancy-link" to="work">cool stuff</Link>
      {' '}
      with code.
    </div>
  </div>
);

const Title = styled(Title_)`

  h1{
    margin: 0;
    padding: .4rem 0;
    font-weight: normal;
    font-size: 3.7rem;
    line-height: 1;
  }

  .tagline{
    margin-top: 1rem;

    a{
      text-decoration: none;
      /*color: #333;*/
      /*background: white;
      padding: .0em 0.2em;*/

      /*&:hover{
        background: #000;
        color: white;
      }*/
    }
  }
`;

const Home = () => (
  <Section>
    <Row>
      <Container>
        <Title />
      </Container>
    </Row>
    <Row>
      <Container>
        <Button><Link to="/about">Get in touch</Link></Button>
      </Container>
    </Row>
  </Section>
);

export default Home;
