import React from 'react';
import styled from 'styled-components';

const WorkItemTitle = ({ organization, position }) =>
  <div className="title">
    <span className="organization">{organization}:</span>
    {' '}
    <span className="position">{position}</span>
  </div>;

const WorkItemHeader = ({ dates, location, organization, position }) =>
  <header>
    <div className="row title-row">
      <WorkItemTitle organization={organization} position={position} />
      <div className="dates">{dates}</div>
    </div>
    <div className="row">
      <div className="location">{location}</div>
    </div>
  </header>;

const ExpereinceItem = ({ accomplishments, ...rest }) =>
  <li className="experience">
    <WorkItemHeader {...rest} />
    <ul className="accomplishments-list">
      {accomplishments.map((text, key) =>
        <li key={key} className="accomplishment-item">{text}</li>
      )}
    </ul>
  </li>;

const UnstyledExpereinceList = props =>
  <ol className="expereience-list">
    {props.items.map((item, key) => <ExpereinceItem key={key} {...item} />)}
  </ol>;

const ExpereinceListWrap = styled.div`
	ol{
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.organization{
		font-weight: 600;
	}
	.title-row{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: .95em;
	}
  .position{
    ${'' /* font-style:italic; */}
		color: #444;
  }
	.dates{
		white-space: nowrap;
		font-size: .8em;
		color: #777;
	}
	.location{
		font-size: .75em;
		color: #777;
	}
	.accomplishments-list{
		padding: 3px 26px;
    list-style: disc;
		font-size: .95em;
		line-height: 1.2;
		margin-top: 3px;
	}
	.experience{
		line-height: 1.35;
    margin-top: 5px;

		li + li{
			padding-top: 3px;
		}
	}
	.experience + .experience{
		margin-top: 10px;
	}
`;

const ExpereinceList = props =>
  <ExpereinceListWrap>
    <UnstyledExpereinceList {...props} />
  </ExpereinceListWrap>;

export default ExpereinceList;
