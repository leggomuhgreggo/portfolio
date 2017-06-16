import React from 'react';
import styled from 'styled-components';
import { Container, Row, Section } from '../Scaffolding/Scaffolding.js';

// 'work-group':{
//   GroupTitle: 'Fun'
// }

const WORK_CONFIG = [
  {
    title: 'Glocks',
    link: 'https://github.com/leggomuhgreggo/glocks',
    summary: `A CSS Locks library, written in SASS for better fluid responsivity. Curently adapting to JS so it can work with styled-components`,
    img: '',
    tags: []
  },
  {
    title: 'Songwrite',
    link: 'http://dev.songwrite.io',
    summary: `Project management suite for music development written in a Meteor JS stack`,
    img: '',
    tags: []
  },
  {
    title: 'All That Is Interesting',
    link: 'http://all-that-is-interesting.com/',
    summary: `Top 10k Alexa ranked website I redesigned.`,
    img: '',
    tags: []
  },
  {
    title: 'J.A. Werthmann Music Lessons',
    link: 'https://www.jawerthmannmusiclessons.com',
    summary: `A create-react-app based website I made for a buddy's music lessons business.`,
    img: '',
    tags: []
  },
  {
    title: 'Slick Carousel',
    link: 'https://github.com/kenwheeler/slick',
    summary: `Slider repo created by the excellent Ken Wheeler that I've been a primary maintainer of for the past 2 years`,
    img: '',
    tags: []
  },
  {
    title: 'Webpack FTP Plugin',
    link: 'https://github.com/leggomuhgreggo/webpack-ftp-plugin',
    summary: `Quick and dirty webpack plugin to upload emitted files`,
    img: '',
    tags: []
  },
  {
    title: 'American Ipsum',
    link: 'http://americanipsum.com',
    summary: `I woke up one day to discover that there was a Canadian Ipsum, but no American Ipsum. This is one of the first things I wrote in JS`,
    img: '',
    tags: []
  },
  {
    title: 'Celebrity Hospital',
    link: 'http://celebrity-hospital.com',
    summary: `A charades-like game my friends and I came up with where you randomly match a celebrity with a malody and have to act it out.`,
    img: '',
    tags: []
  }
];

// const Icon = () => {};
const Summary = styled.div`
  margin-top: .3rem;
  font-size: 17px;
`;

const FancyLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Small = styled.a`
  font-size: 12px;
  margin-top: .5rem;
  font-family: sans-serif;
  font-weight: 300;
  color: #aaa;
  display: block;
  text-decoration: none;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-family: sans-serif;
  font-weight: 500;
`;

const WorkItem_ = ({ className, ...props }) =>
  <li className={className}>
    <Title>
      <FancyLink target="_blank" rel="noopener noreferrer" href={props.link}>
        {props.title}
      </FancyLink>
    </Title>
    <Summary>{props.summary}</Summary>
    <Small target="_blank" rel="noopener noreferrer" href={props.link}>
      {props.link}
    </Small>
  </li>;

const WorkItem = styled(WorkItem_)`
  &:not(:first-child){ margin-top: 1.4rem; }
`;

// const Tag = () => {};
// const TagWrap = () => {};

const WorkList = () =>
  <ul>
    {WORK_CONFIG.map((item, key) => <WorkItem key={key} {...item} />)}
  </ul>;

const Work = () =>
  <Section>
    <Row>
      <Container>

        <WorkList />

      </Container>
    </Row>
    <Row />
  </Section>;

export default Work;
