import styled from '@emotion/styled';
import React from 'react';
import Typography from '../default/Typography.jsx';
import { Icon } from '@iconify-icon/react';

const StyledMenuBar = styled.div``

const StyledMenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const StyledMenuItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  background: grey;
  padding: 10px;
  border-radius: 7px;
`

const StyledMenuIcon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 3px;
  margin: 0 10px 0 0;
  background-color: #09f;
`

export class MenuBar extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      
    }
  }

  render () {
    return (
      <StyledMenuBar>
        <StyledMenuList>
          {this.props.children}
        </StyledMenuList>
      </StyledMenuBar>
    )
  }
}

export const MenuItem = ({title, icon, link, state}) => {
	return (
		<StyledMenuItem>
      <MenuIcon icon={icon} />

      <Typography 
        style={{

        }}
      >
        {title}
      </Typography>
		</StyledMenuItem>
	)
}

export const MenuIcon = ({ icon }) => {
  return (
    <StyledMenuIcon>
      <Icon icon={icon}/>
    </StyledMenuIcon>
  )
}