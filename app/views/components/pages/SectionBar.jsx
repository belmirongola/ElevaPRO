import React from 'react';
import Switch from '../menu/Switch.jsx';

export default function SectionBar ({ set, children }) {
	return (
		<div className="content">
			<Switch 
				id="collapsed"
				checked={true}
				onChange={set}
				label={"Collapse"}
			/>			
			{children}
		</div>
)}