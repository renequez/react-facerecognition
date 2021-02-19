import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	const handleFocus = (e) => e.target.select();

	return (
		<div className='center f3 tc mt4 pa4 br3 shadow-5 rank-container'>
			<article>
				<p className='main-text'>
					Let me detect the <span className='underline-magical'>faces</span> of the mofos
					in your pics!
				</p>
				<p className='main-text mb4'>
					Give me a link to photo and I'll{' '}
					<span className='underline-magical'>execute</span>.
				</p>
				<div className='center'>
					<input
						type='text'
						className='pa2 w-70 center detect-btn'
						name=''
						id=''
						onChange={onInputChange}
						onFocus={handleFocus}
					/>
					<button onClick={onButtonSubmit} className='ml3 w-30 link ba tc pv2 detect-btn'>
						DETECT
					</button>
				</div>
			</article>
		</div>
	);
};

export default ImageLinkForm;
