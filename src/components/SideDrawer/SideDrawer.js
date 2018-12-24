import React from 'react';

import './SideDrawer.css'

const sideDrawerButton = props =>(
	<button className='toggle-button' onClick={props.click} >
	<div className ='toggle-button_line' />
	<div className ='toggle-button_line' />
	<div className ='toggle-button_line' />
	</button>
	);

export default sideDrawerButton;