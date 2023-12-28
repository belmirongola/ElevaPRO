import styled from '@emotion/styled';
import React from 'react';
import Typography from '../default/Typography.jsx';

const StyledButton = styled.a`
  padding: 5px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  color: #484848;
  text-decoration: none;
`;

const StyledSidebarFooter = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
`;

const StyledCollapsedSidebarFooter = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
`;

const codeUrl =
  'https://github.com/azouaoui-med/react-pro-sidebar/blob/master/storybook/Playground.tsx';

const SidebarFooter = ({ children, collapsed, ...rest }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px',
      }}
    >
      {collapsed ? (
        <StyledCollapsedSidebarFooter href={codeUrl} target="_blank">
            OKK
        </StyledCollapsedSidebarFooter>
      ) : (
        <StyledSidebarFooter {...rest}>
          <div style={{ marginBottom: '12px' }}>
            OKK
          </div>
          <Typography fontWeight={600}>Pro Sidebar</Typography>
          <Typography variant="caption" style={{ letterSpacing: 1, opacity: 0.7 }}>
            V 2
          </Typography>
          <div style={{ marginTop: '16px' }}>
            <StyledButton href={codeUrl} target="_blank">
              <Typography variant="caption" color="#607489" fontWeight={600}>
                View code
              </Typography>
            </StyledButton>
          </div>
        </StyledSidebarFooter>
      )}
    </div>
  );
};

export default SidebarFooter;
