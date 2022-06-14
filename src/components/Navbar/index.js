import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
        <h3 style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        height: '100vh',
        color:'blue'
      }}>Plant Disease Image Identification</h3>
		<NavMenu>
		<NavLink to='/about' activeStyle>
			Home
		</NavLink>
		<NavLink to='/events' activeStyle>
			Plants
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Diseases
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
