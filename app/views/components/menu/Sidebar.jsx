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
		fontSize: '13px',
		fontWeight: 400,
		borderRadius: '7px',
		margin: '0px 0px 5% 5%',
		width: '90%'
	},
	icon: {
		color: blue,
		fontSize: '16pt',
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
				? '#121b2eff'
				: 'transparent',
		borderRadius: '5px'
	}),
	button: {
		[`&.${menuClasses.disabled}`]: {
			color: grey
		},
		'&:hover': {
			backgroundColor: '#0023c4ff;',
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
			width="200px"
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
							icon={ <Icon icon="fluent:apps-32-filled"/> }
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
				</div>

				<SidebarFooter collapsed={collapsed}/>
			</div>
		</Sidebar>
)}

export default SidebarElement;