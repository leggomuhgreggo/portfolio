// import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  width: ${props => (props.type === 'wide' ? '50rem' : props.type === 'fluid' ? '100%' : '42rem')};
  margin-left: auto;
  margin-right: auto;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Section = styled.section`
  width: 100%;
`;

export { Container, Row, Section };
