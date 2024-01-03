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
    margin-top: 5%;
  }
`;

const SidebarHeader = ({ logo, name, state }) => {
	return (
		<StyledSidebarHeader>
			<img src={ logo } alt={ name } />
			<Typography
        variant="subtitle1" 
        fontWeight={ 400 } 
        color="#fff"
        style={{
          display: state? 'none': ''
        }}>
        
				{ name }
			</Typography>
		</StyledSidebarHeader>
	);
}

export default SidebarHeader;