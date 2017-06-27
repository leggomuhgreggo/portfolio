import styled from 'styled-components';
import bgimg from '../../simple_dashed.png';

const SiteWrap = styled.div`
	background: #141516;
	background-image: url(${bgimg});
	color: white;
	min-height: 100vh;
	width: 100%;
	font-weight: 300;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-bottom: 50px;
`;
export default SiteWrap;
