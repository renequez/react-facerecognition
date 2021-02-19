import React from 'react';
import Logo from './Logo';

const Navigation = ({ route, onRouteChange }) => {
	return (
		<nav>
			<Logo />
			{route === 'home' && (
				<p className='f3 link dim pa3 mr4 pointer' onClick={() => onRouteChange('signout')}>
					Sign Out
				</p>
			)}
		</nav>
	);
};

export default Navigation;
