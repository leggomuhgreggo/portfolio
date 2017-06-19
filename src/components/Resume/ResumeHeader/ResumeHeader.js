import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	text-align: center;
	text-transform: uppercase;
`;
const Name = styled.h1`
	margin: 0;
	display: inline-block;
	border-bottom: 1px solid #000;
	font-weight: normal;
`;
const ContactInfo = styled.div`
	margin-top: .4em;
	font-size: .7em;
	line-height: 1.3;
`;

const ResumeHeader = ({contact}) =>
	<Header>
		<Name>{ contact.name }</Name>
		<ContactInfo>
			<div className="address-row">
				<span className="label">Address: </span>
				<span className="address1">{ contact.address.line1 }</span>
				{' • '}
				<span className="address2">{ contact.address.line2 }</span>
			</div>
			<div className="address-row">
				<span className="label">Phone: </span>
				<span className="phone">{ contact.phone }</span>
				{' • '}
				<span className="label">Email: </span>
				<span className="email">{ contact.email }</span>
			</div>
		</ContactInfo>
	</Header>

export default ResumeHeader;