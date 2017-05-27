import React from 'react';
import styled, { css } from 'styled-components';

const FormEl = styled.form`
  padding: 1.4rem;
`;

const FieldWrap = styled.div`
  &:not(:first-child){
    margin-top: 1.2rem;
  }
`;

const textStyles = css`
  width: 100%;
  padding: 0;
  height: 2rem;
  background: transparent;
  border: none;
  border-bottom: dotted 1px #eee;
  color: white;

  &:focus{
    border-bottom: solid 1px #eee;
    outline: 0;
  }
`;

const Input_ = ({ ...props }) => (
  <input
    {...props}
    onChange={props.handleChange}
    type="text"
    value={props.value}
    placeholder={props.placeholder}
    required={props.required}
  />
);

const Textarea_ = ({ ...props }) => (
  <textarea
    {...props}
    onChange={props.handleChange}
    value={props.value}
    placeholder={props.placeholder}
    required={props.required}
  >
    {props.children}
  </textarea>
);

const Input = styled(Input_)`
  ${textStyles}

  & + span {
    margin-top: 6px;
  }
`;

const Textarea = styled(Textarea_)`
  ${textStyles}
  height: 4rem;
`;

const Optional = styled.span`
  font-size: .5em;
  color: white;
  opacity:.65;
  float: right;
  margin-top: .2em;
  text-transform: uppercase;
`;

const FormTitle = styled.h3`
  color: white;
`;

export { Input, Textarea, FormEl, FieldWrap, Optional, FormTitle };
