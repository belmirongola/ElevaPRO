import styled from '@emotion/styled';
import React from 'react';
import Typography from '../default/Typography.jsx'

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
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

const SidebarHeader = ({ children, ...rest }) => {
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <StyledLogo>E</StyledLogo>
        <div>
            <Typography 
              variant="subtitle1" 
              fontWeight={400} 
              color="#fff">
                ElevaPRO
            </Typography>
        </div>
      </div>
    </StyledSidebarHeader>
  );
};

export default SidebarHeader;