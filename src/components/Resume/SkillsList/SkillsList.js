import React from 'react';
import styled from 'styled-components';

const Tag = styled.span`
	background: #f0f0f0;
	display: inline-block;
	padding: .3em .8em;
	font-size: .65em;
	border-radius: 3px;
	font-family: sans-serif;
  margin: 1px 2px;
	color: #444;
`;

const TagGroup = props =>
  <div className="skill-type-wrap">
    <label>{props.label}: </label>
    <div className="tag-group">
      {props.tags.map((tag, key) =>
        <Tag key={key} color={tag.color}>{tag}</Tag>
      )}
    </div>
  </div>;

const SkillsWrap = styled.div`
  margin-top: 5px;
	margin-left: -2px;
	margin-right: -2px;
	.skill-type-wrap{
    &, .tag-group{
      display: inline;
    }

    label{display: none;}
	}
`;

const SkillsList = ({ skills }) =>
  <SkillsWrap>
    {Object.keys(skills).map((skillType, key) => {
      console.log(skillType);
      return <TagGroup key={key} label={skillType} tags={skills[skillType]} />;
    })}
  </SkillsWrap>;

export default SkillsList;
