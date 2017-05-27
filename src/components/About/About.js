import React from 'react';
// import styled from 'styled-components';

import { Container, Row, Section } from '../Scaffolding/Scaffolding.js';
import Form from '../Form/Form.js';

const FORM_CONFIG = [
  {
    component: 'Input',
    label: 'Name',
    required: true,
    placeholder: 'Name'
  },
  {
    component: 'Input',
    label: 'Email',
    required: true,
    placeholder: 'Email'
  },
  {
    component: 'Input',
    label: 'Orgnaization',
    required: false,
    placeholder: 'Orgnaization'
  },
  {
    component: 'Textarea',
    label: 'Message',
    required: false,
    placeholder: 'Message'
  }
];

// class ContactForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
//
//   update(e) {
//     this.setState({});
//   }
// }

const Home = () => (
  <Section>
    <Row>
      <Container>

        <Form formFields={FORM_CONFIG} />

      </Container>
    </Row>
    <Row />
  </Section>
);

export default Home;
