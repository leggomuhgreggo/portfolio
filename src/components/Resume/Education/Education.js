import React from 'react';
import styled from 'styled-components';

const _Education = ({ university, school, degree, majors, ...rest }) =>
  <div {...rest}>
    <div className="row">
      <div className="left">
        <div className="row university">{university}</div>
        <div className="row degree">{degree}</div>
      </div>
      <div className="right school">{school}</div>
    </div>
    <div className="mjors row">
      Majors: {majors}
    </div>
  </div>;

const Education = styled(_Education)`
  padding: 5px 0;
  font-size: .95em;

  .school, .degree{
    color: #888;
    font-size: .85em;
    font-style: italic;
  }

  label{font-weight: bold}
  > .row{
    display: flex;
    margin-top: 5px;
    justify-content: space-between;

    &.majors{
      justify-content: flex-start;
      font-size: .85em;
    }
  }
`;

export default Education;
