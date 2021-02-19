import { useState } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import ImageLinkForm from './components/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition';
import Rank from './components/Rank';
import SignIn from './components/SignIn';
import Register from './components/Register';
import { initialProfile, particleOptions } from './assets/misc-values.js';
import './styles/App.css';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [imgUrl, setImgUrl] = useState('');
	const [box, setBox] = useState([]);
	const [route, setRoute] = useState('signin');
	const [profile, setProfile] = useState(initialProfile);

	const resetProfile = () => {
		setBox([]);
		setImgUrl('');
		setProfile(initialProfile);
		setRoute('signin');
	};

	const loadUser = ({ id, name, email, entries, joined }) => {
		setProfile({
			id: id,
			name: name,
			email: email,
			entries: entries,
			joined: joined,
		});
	};

	const calculateFaceLocation = (data) => {
		const regions = data.outputs[0].data.regions.map((region) => {
			const { bounding_box } = region.region_info;
			const image = document.getElementById('inputImage');
			const width = parseFloat(image.width);
			const height = parseFloat(image.height);
			return {
				leftCol: bounding_box.left_col * width,
				topRow: bounding_box.top_row * height,
				rightCol: width - bounding_box.right_col * width,
				bottomRow: height - bounding_box.bottom_row * height,
			};
		});
		return regions;
	};

	const displayFaceBox = (inputBox) => {
		setBox(inputBox);
	};

	const onInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const onRouteChange = (inputRoute) => {
		setRoute(inputRoute);
	};

	if (route === 'signout') {
		resetProfile();
	}

	const onButtonSubmit = () => {
		setImgUrl(inputValue);
		fetch('https://ancient-reef-95389.herokuapp.com/image', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				inputValue: inputValue,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				if (response) {
					fetch('https://ancient-reef-95389.herokuapp.com/image', {
						method: 'put',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							id: profile.id,
						}),
					})
						.then((response) => response.json())
						.then((count) => setProfile({ ...profile, entries: count }));
				}
				displayFaceBox(calculateFaceLocation(response));
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Particles className='particles' params={particleOptions} />
			<Navigation setProfile={setProfile} onRouteChange={onRouteChange} route={route} />
			{route === 'home' ? (
				<>
					<Rank profile={profile} />
					<ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
					<FaceRecognition key={route} box={box} imgUrl={imgUrl} />
				</>
			) : route === 'signin' || route === 'signout' ? (
				<SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
			) : (
				<Register loadUser={loadUser} onRouteChange={onRouteChange} />
			)}
		</div>
	);
}

export default App;
