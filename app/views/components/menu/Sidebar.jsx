import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, 
		 sidebarClasses } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

import Items from './MenuItens.json'

function SidebarElement ({ collapsed, setCollapsed }) {
	return (
		<Sidebar 
			collapsed={collapsed}
			rootStyles={{
				[`.${sidebarClasses.container}`]: {
					backgroundColor: '#000'
				}
			}}
			>
			<Menu 
				menuItemStyles={{
					button: {
						[`&.active`]: {
							backgroundColor: '#13395e',
							color: '#b6c8d9'
						},
					},
				}}
			>
				{Items.map((item) => (
					<MenuItem
						key={item.id}
						icon={
							<Icon />
						}
						//component={ <Link to={item.link}/> }
					> 
					{item.title} 
					</MenuItem>
				))}
			</Menu>
		</Sidebar>
)}

export default SidebarElement;