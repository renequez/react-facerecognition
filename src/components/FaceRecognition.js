import React from 'react';

const FaceRecognition = ({ imgUrl, box }) => {
	// console.log('facerec', box);
	return (
		<div className='image-container center pa4 br3'>
			<div className='absolute'>
				<img id='inputImage' width='500px' height='auto' src={imgUrl} alt='' />
				{box.map((each, index) => {
					return (
						<div
							key={index}
							className='bounding-box'
							style={{
								top: each.topRow,
								right: each.rightCol,
								bottom: each.bottomRow,
								left: each.leftCol,
							}}></div>
					);
				})}
			</div>
			<div className='absolute'>
				<br></br>
				<br></br>
			</div>
		</div>
	);
};

export default FaceRecognition;
