import React from 'react';
import Switch from '../menu/Switch.jsx';

export default function SectionBar ({ set, o, children }) {
	return (
		<div className="content">
			<Switch 
				id="collapsed"
				checked={o}
				onChange={set}
				label={"Collapse"}
			/>			
			{children}
		</div>
)}