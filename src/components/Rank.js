import React from 'react';

const Rank = ({ profile }) => {
	const { name, entries } = profile;
	return (
		<div className='center pa4 br3 shadow-5 rank-container'>
			<p className='main-text tc'>
				<span className='underline-magical user-stats'>{name}</span>, your current entry
				count is <span className='underline-magical user-stats'>{entries}</span>.
			</p>
		</div>
	);
};

export default Rank;
