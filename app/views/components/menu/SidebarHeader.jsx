import styled from '@emotion/styled';
import React from 'react';
import Typography from '../default/Typography.jsx'

const StyledSidebarHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0;

  > img {
    width: 40px;
    height: 40px;
  }
`;

const StyledLogo = styled.div`
  width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  background-color: #009fdb;
  background: grey;
  margin-right: 5px;
`;

const SidebarHeader = ({ logo, name }) => {
	return (
		<StyledSidebarHeader>
			<img src={logo} alt={name} />
			<Typography
        variant="subtitle1" 
        fontWeight={400} 
        color="#fff"
      >
				{name}
			</Typography>
		</StyledSidebarHeader>
	)
}
export default SidebarHeader;