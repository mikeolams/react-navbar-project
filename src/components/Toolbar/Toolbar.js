import React from 'react';

import "./Toolbar.css";

import SideDrawerButton from '../SideDrawer/SideDrawer'

const toolbar = props => (
	<header className='toolbar'>
	<nav className='toolbar_navbar' >
		<div>
		<SideDrawerButton click={props.drawerClickHandler} />
		</div>
		<div className='spacer'/>
		<div className='toolbar_symbol' >
		<p>Linkcard_v3</p>
		</div>
		<div/>
	</nav>
	</header>

	);

export default toolbar;