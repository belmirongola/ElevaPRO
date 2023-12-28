import React from 'react';
import Switch from '../menu/Switch';

export default function SectionBar ({ set, children }) {
	return (
		<div className="content">
			<Switch 
				id="collapsed"
				checked={true}
				onchange={set}
				label={Collapse}
			/>			
			{children}
		</div>
)}