import React from 'react';
// import styled from 'styled-components';
import {
  FormTitle,
  Input,
  Textarea,
  FormEl,
  FieldWrap,
  Optional
} from './FormPrimitives/FormPrimitives.js';

import Button from '../Button/Button.js';

// stupid react cant interpolate strings as components
const FieldComponents = {
  Input,
  Textarea
};

const Form = ({ formFields, ...rest }) => (
  <FormEl>
    <FormTitle>Get in Touch</FormTitle>
    {formFields.map(({ component, required, ...rest }, key) => {
      const Field = FieldComponents[component];

      return (
        <FieldWrap>
          <Field {...rest} key={key} />
          {!required && <Optional>Optional</Optional>}
        </FieldWrap>
      );
    })}
    <Button>Submit</Button>
  </FormEl>
);

export default Form;
