import React from 'react';
import styled from 'styled-components';
import validator from 'validator';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import Button from '../Button/Button.js';
import { Container, Row, Section } from '../Scaffolding/Scaffolding.js';
import {
  Input,
  Textarea,
  FormEl,
  FieldWrap,
  ErrorMessage
} from '../../components/Forms/Form.js';

const FormWrap = styled.div`position: relative;`;

const SuccessMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  flex-direction: column;

  .success-title{
    color: #FFF;
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
`;

// const ContactButton = styled.button`
// 	background: black;
// 	color: white;
// 	border: 0;
// 	padding: .3em 1.5em;
// 	font-size: 1.1em;
// 	display: block;
// 	margin-right: auto;
// 	margin-left: auto;
// 	margin-top:1.4rem;
//   &:focus{outline:0;}
// 	h2{margin:0!important;}
// 	a{color: white;text-decoration:none}
// `;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        value: '',
        touched: false,
        dirty: false,
        error: false,
        errorMessage: 'Please enter a name.',
        required: true,
        validation: val => validator.isEmpty(val)
      },
      email: {
        value: '',
        touched: false,
        dirty: false,
        error: false,
        errorMessage: 'Please enter a valid email.',
        required: true,
        validation: val => !validator.isEmail(val)
      },
      message: {
        value: '',
        touched: false,
        dirty: false,
        error: false,
        errorMessage: 'Please enter a breif message.',
        required: true,
        validation: val => validator.isEmpty(val)
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    let dirty, error;

    if (value !== '') {
      dirty = true;
    }

    if (this.state[name].required) {
      error = this.state[name].validation(value);
    }

    const newState = {
      ...this.state,
      [name]: {
        ...this.state[name],
        error: error,
        dirty: dirty,
        touched: true
      }
    };

    this.setState(newState);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const newState = {
      ...this.state,
      [name]: {
        ...this.state[name],
        error: false,
        value: value
      }
    };

    this.setState(newState);
  }

  handleSubmit(event) {
    const state = this.state;
    const that = this;
    let formIsValid = true;
    let formObj = {};

    for (let field in state) {
      if ({}.hasOwnProperty.call(state, field)) {
        if (state[field].error === true || state[field].touched === false) {
          state[field].error = true;

          if (formIsValid) {
            formIsValid = false;
          }
        } else {
          formObj[field] = state[field].value;
        }
      }
    }

    if (formIsValid) {
      // const formJSON = {
      //   state.
      // }
      console.log(formObj);
      axios({
        method: 'post',
        url: 'https://6j3acfz0cl.execute-api.us-west-2.amazonaws.com/prod',
        data: formObj
      }).then(function(res) {
        console.log('res', res);
        if (res.data.response === 'OK') {
          that.setState({ success: true });
        }
      });
    }

    event.preventDefault();
  }

  render() {
    return (
      <FormWrap>
        <FormEl success={this.state.success} onSubmit={this.handleSubmit}>
          <FieldWrap>
            <Input
              data-field-error={this.state.name.error}
              type="text"
              name="name"
              value={this.state.name.value}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              placeholder="Name"
            />
            {this.state.name.error &&
              <ErrorMessage>{this.state.name.errorMessage}</ErrorMessage>}
          </FieldWrap>
          <FieldWrap>
            <Input
              data-field-error={this.state.email.error}
              type="email"
              name="email"
              value={this.state.email.value}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              placeholder="Email"
            />
            {this.state.email.error &&
              <ErrorMessage>{this.state.email.errorMessage}</ErrorMessage>}
          </FieldWrap>

          <FieldWrap>
            <Textarea
              data-field-error={this.state.message.error}
              placeholder="Enter Message"
              name="message"
              value={this.state.message.value}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
            />
            {this.state.message.error &&
              <ErrorMessage>{this.state.message.errorMessage}</ErrorMessage>}
          </FieldWrap>

          <Button type="submit">Submit</Button>

        </FormEl>
        {this.state.success &&
          <SuccessMessage>
            <div className="success-title">Success!</div>
            Thanks for reaching out! <br />
            I will get back to you soon.
          </SuccessMessage>}
      </FormWrap>
    );
  }
}

const About = () =>
  <Section>

    <Helmet>
      <title>About</title>
      <meta
        name="description"
        content="A little background on me and a form by which to contact me"
      />
    </Helmet>
    <Row>
      <Container>
        <ContactForm />
      </Container>
    </Row>
    <Row />
  </Section>;

export default About;
