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
import { Icon } from '@iconify-icon/react'
import Typography from '../default/Typography.jsx'
import SidebarHeader from './SidebarHeader.jsx'
import SidebarFooter from './SidebarFooter.jsx'
import Badge from './Badge.jsx'

import Items from './MenuItens.json'
import { blue, grey } from '@material-ui/core/colors'

const menuItemStyles = {
	root: {
		fontSize: '12pt',
		fontWeight: 400,
		borderRadius: '5px',
		margin: '0px 0px 5% 5%',
		width: '90%'
	},
	icon: {
		color: '#fff',
		fontSize: '18pt',
		[`&.${menuClasses.disabled}`]: {
			color: grey
		}
	}, 
	SubMenuExpandIcon: {
		color: '#fff'
	},
	subMenuContent: ({ level }) => ({
		backgroundColor:
			level === 0
				? '#fff'
				: 'transparent',
		borderRadius: '5px'
	}),
	button: {
		borderRadius: '10px',
		[`&.${menuClasses.disabled}`]: {
			color: grey
		},
		'&:hover': {
			backgroundColor: 'grey;',
			color: '#fff'
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
			width="230px"
			rootStyles={{ 
				color: '#f4f4f4', 
				margin:"1% 0 1% 1%",
				borderRadius: '10px',
				border: 'thin solid #fff',
				[`&>div`]:{
					borderRadius: '10px'
				}
			}}
			backgroundColor='#000000ff'>
			
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				borderRadius: '30px',
			}}>
				<SidebarHeader
					style={{
						marginBottom: '24px',
						marginTop: '16px'}}/>

				<div style={{ 
					flex: 1,
					marginBottom: collapsed ? '0px' : '32px'
					}}>
					<div style={{
						padding: '0 24px',
						marginBottom: collapsed ? '0px' : '8px'
					}}>
						<Typography
							variant='body2'
							fontWeight={600}
							style={{
								opacity: collapsed ? 0 : 0.7,
								letterSpacing: '0.5px'}}>
							GERAL
						</Typography>
						<Divisor cl={collapsed}/>
					</div>

					<Menu menuItemStyles={menuItemStyles}>
						<MenuItem
							icon={ <Icon icon="fluent:apps-32-filled"/> }
							suffix={
								<Badge
									variant='danger'
									shape='circle'
								>6</Badge>
							}> 
							Imagens </MenuItem>

						<MenuItem
							icon={ <Icon icon="fluent:apps-32-filled"/> }
						> Texto </MenuItem>

						<MenuItem
							icon={ <Icon icon="fluent:apps-32-filled"/> }
						> Documentos </MenuItem>
					</Menu>

					<div
						style={{
							padding: '0 24px',
							marginBottom: '8px',
							marginTop: '32px'}}>
						<Typography
							variant='body2'
							fontWeight={400}
							style={{
								opacity: collapsed ? 0 : 0.7,
								letterSpacing: '0.5px'
							}}>
							EXTRA
						</Typography>
						<Divisor cl={collapsed}/>
					</div>

					<Menu menuItemStyles={menuItemStyles}>
						<MenuItem
							label={'ok'}
							icon={ <Icon icon="fluent:apps-32-filled"/> }
							suffix={
								<Badge variant='success'>
									New
								</Badge>
							}>
							Calendar
						</MenuItem>
					</Menu>
				</div>

				<SidebarFooter collapsed={collapsed}/>
			</div>
		</Sidebar>
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