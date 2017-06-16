import React from 'react';
import styled, { css } from 'styled-components';

const errorColor = '#ec7a76';

const FormEl = styled.form`
  position: relative;
`;

const FieldWrap = styled.div`
  position: relative;

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

  &[data-field-error="true"]{
    border-color: ${errorColor};
  }
`;

const Input_ = ({ ...props }) =>
  <input
    {...props}
    onChange={props.onChange}
    onBlur={props.onBlur}
    type={props.type}
    value={props.value}
    placeholder={props.placeholder}
  />;

Input_.defaultProps = {
  onChange: '',
  onBlur: '',
  type: 'text',
  value: '',
  placeholder: ''
};

const Textarea_ = ({ ...props }) =>
  <textarea
    {...props}
    onChange={props.onChange}
    onBlur={props.onBlur}
    value={props.value}
    placeholder={props.placeholder}
  >
    {props.children}
  </textarea>;

Textarea_.defaultProps = {
  onChange: '',
  onBlur: '',
  value: '',
  placeholder: ''
};

const Input = styled(Input_)`
  ${textStyles}

  & + span {
    margin-top: 6px;
  }
`;

const Textarea = styled(Textarea_)`
  ${textStyles}
  height: 4rem;
  vertical-align: top;
`;

const Optional = styled.span`
  font-size: .5em;
  opacity:.65;
  float: right;
  margin-top: .2em;
  text-transform: uppercase;
`;

const ErrorMessage = styled.div`
  color: ${errorColor};
  font-size: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(0,100%);
  line-height: 1;
  padding: 2px 0;
`;

const FormTitle = styled.h3`

`;

export {
  Input,
  Textarea,
  FormEl,
  FieldWrap,
  Optional,
  FormTitle,
  ErrorMessage
};
