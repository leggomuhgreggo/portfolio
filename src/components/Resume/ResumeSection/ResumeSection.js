import React from 'react';
import styled from 'styled-components';

const TitleRow = styled.div`
	border-bottom: #000 1px solid;
	h2{
		font-size: 1.2em;
		margin: 0;
		padding-bottom: 3px;
	}
`;

const ResumeSection = props =>
  <section className="resume-section">
    <TitleRow>
      <h2>{props.title}</h2>
    </TitleRow>
    {props.children}
  </section>;

export default ResumeSection;
