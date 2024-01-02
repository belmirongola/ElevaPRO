import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify-icon/react'
import Typography from '../default/Typography.jsx'
import SidebarHeader from './SidebarHeader.jsx'
import { MenuBar, MenuItem } from './MenuElements.jsx'
import Badge from './Badge.jsx'

import Items from './MenuItens.json'


function SidebarElement ({ collapsed, setCollapsed }) {
	return (
		<div className='sidebar'>
			<SidebarHeader name={'ElevaPRO'} logo={{}} />
			<MenuBar>
				<MenuItem 
					title={'Images'}
					icon={''}
					state={collapsed}
					/>

				<MenuItem 
					title={'Text'}
					icon={''}/>

				<MenuItem 
					title={'Docs'}
					icon={''}/>

				<MenuItem 
					title={'Apps'}
					icon={''}/>
			</MenuBar>
		</div>
)}

const Divisor = ({ cl }) => {
	return (
		<hr style={{
			opacity: cl ? 0.7 : 0,
			color: 'grey',
			transition: '0.3s'
		}}/>
	)
}
export default SidebarElement;