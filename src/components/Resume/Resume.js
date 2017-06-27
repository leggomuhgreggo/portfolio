import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Helmet } from 'react-helmet';

import ResumeHeader from './ResumeHeader/ResumeHeader.js';
import SkillsList from './SkillsList/SkillsList.js';
import ResumeSection from './ResumeSection/ResumeSection.js';
import ExpereinceList from './WorkHistoryItem/WorkHistoryItem.js';
import Education from './Education/Education.js';

import RESUME_DATA from '../../data/experience.json';

// eslint-disable-next-line
injectGlobal`
  body, html {
    background: white;
  }
`;

const ResumeWrap = styled.div`
  background: white;
  padding: 1rem;
  font-size: .8rem;
  color: #222;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  max-width: 100%;

  .resume-section{
    margin-top: 10px;
  }
`;

const Resume = () =>
  <ResumeWrap>
    <Helmet>
      <title>Greg's Resume</title>
      <meta name="description" content="A resume I whipped up in react" />
    </Helmet>
    <ResumeHeader contact={RESUME_DATA.contact} />

    <ResumeSection title="Technical Skills">
      <SkillsList skills={RESUME_DATA.skills} />
    </ResumeSection>

    <ResumeSection title="Experience">
      <ExpereinceList items={RESUME_DATA.experience} />
    </ResumeSection>

    <ResumeSection title="Education">
      <Education {...RESUME_DATA.education} />
    </ResumeSection>

  </ResumeWrap>;

export default Resume;
