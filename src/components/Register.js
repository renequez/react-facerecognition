import React, { useState } from 'react';

const Register = ({ onRouteChange, loadUser }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	const onUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const onEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const onRegisterSubmit = async () => {
		const response = await fetch('https://ancient-reef-95389.herokuapp.com/register', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: email,
				password: password,
				name: username,
			}),
		});
		const user = await response.json();

		if (user.id) {
			loadUser(user);
			onRouteChange('home');
		} else {
			console.log(user);
		}
	};

	return (
		<article className='br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
			<main className='pa4 black-80'>
				<form className='measure'>
					<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
						<legend className='f3 fw6 ph0 mh0 center'>Sign Up</legend>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' htmlFor='name'>
								Name
							</label>
							<input
								className='pa2 input-reset b--black-80 ba bg-transparent w-100'
								type='email'
								name='name'
								id='name'
								onChange={onUsernameChange}
							/>
						</div>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' htmlFor='email-address'>
								Email
							</label>
							<input
								className='pa2 input-reset b--black-80 ba bg-transparent w-100'
								type='email'
								name='email-address'
								id='email-address'
								onChange={onEmailChange}
							/>
						</div>
						<div className='mv3'>
							<label className='db fw6 lh-copy f6' htmlFor='password'>
								Password
							</label>
							<input
								className='b pa2 input-reset b--black-80 ba bg-transparent w-100'
								type='password'
								name='password'
								id='password'
								onChange={onPasswordChange}
							/>
						</div>
					</fieldset>
					<div className=''>
						<input
							className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
							type='submit'
							value='Register'
							onClick={onRegisterSubmit}
						/>
					</div>
				</form>
			</main>
		</article>
	);
};

export default Register;
