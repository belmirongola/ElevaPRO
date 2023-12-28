import React, { useState } from 'react'
import { Sidebar, 
		 Menu, 
		 MenuItem,
		 SubMenu,
		 sidebarClasses,
		 menuClasses,
		 MenuItemStyles
		} from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Typography from '../default/Typography'
import SidebarHeader from './SidebarHeader'
import SidebarFooter from './SidebarFooter'
import Badge from './Badge'

import Items from './MenuItens.json'
import { blue, grey } from '@material-ui/core/colors'

const menuItemStyles = {
	root: {
		fontSize: '13px',
		fontWeight: 400
	},
	icon: {
		color: blue,
		[`&.${menuClasses.disabled}`]: {
			color: grey
		}
	}, 
	SubMenuExpandIcon: {
		color: '#b6b7b9'
	},
	subMenuContent: ({ level }) => ({
		backgroundColor:
			level === 0
				? 'red'
				: 'transparent'
	}),
	button: {
		[`&.${menuClasses.disabled}`]: {
			color: grey
		},
		'&:hover': {
			backgroundColor: 'blue',
			color: 'red'
		}
	},
	label: ({ open }) => {
		fontWeight: open ? 600 : undefined
	}
}

function SidebarElement ({ collapsed, setCollapsed }) {
	return (
		<Sidebar 
			collapsed={collapsed}
			rootStyles={{ color: '#fff' }}
			backgroundColor='#000'>
			
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%'
			}}>
				<SidebarHeader
					style={{
						marginBottom: '24px',
						marginTop: '16px'}}/>

				<div style={{ 
					flex: 1,
					marginBottom: '32px'
					}}>
					<div style={{
						padding: '0 24px',
						marginBottom: '8px'
					}}>
						<Typography
							variant='body2'
							fontWeight={600}
							style={{
								opacity: collapsed ? 0 : 0.7,
								letterSpacing: '0.5px'}}>
							Geral
						</Typography>
					</div>

					<Menu menuItemStyles={menuItemStyles}>
						<SubMenu
							label='Apps'
							icon={ <Icon/> }
							suffix={
								<Badge
									variant='danger'
									shape='circle'
								>6</Badge>
							}>
							<MenuItem> Imagens</MenuItem>
							<MenuItem> Texto </MenuItem>
							<MenuItem> Documentos </MenuItem>
						</SubMenu>
					</Menu>

					<div
						style={{
							padding: '0 24px',
							marginBottom: '8px',
							marginTop: '32px'}}>
						<Typography
							variant='body2'
							fontWeight={600}
							style={{
								opacity: collapsed ? 0 : 0.7,
								letterSpacing: '0.5px'
							}}>
							Extra
						</Typography>
					</div>

					<Menu menuItemStyles={menuItemStyles}>
						<MenuItem
							icon={ <Icon /> }
							suffix={
								<Badge variant='success'>
									New
								</Badge>
							}>
							Calendar
						</MenuItem>
					</Menu>
				
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
				</div>

				<SidebarFooter collapsed={collapsed}/>
			</div>
		</Sidebar>
)}

export default SidebarElement;