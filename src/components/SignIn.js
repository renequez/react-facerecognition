import React, { useState } from 'react';

const SignIn = ({ onRouteChange, loadUser }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [wrong, setWrong] = useState(false);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			onSignInSubmit();
		}
	};

	const onEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const onSignInSubmit = async () => {
		const response = await fetch('https://ancient-reef-95389.herokuapp.com/signin', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});
		const data = await response.json();

		if (data.id) {
			loadUser(data);
			onRouteChange('home');
		} else {
			setWrong(true);
			console.log(data);
		}
	};

	return (
		<article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
			<main className='pa4 black-80'>
				<form className='measure'>
					<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
						<legend className='f3 fw6 ph0 mh0 center'>Sign In</legend>
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
								className='b pa2 input-reset ba b--black-80 bg-transparent w-100'
								type='password'
								name='password'
								id='password'
								onChange={onPasswordChange}
								onKeyDown={handleKeyDown}
							/>
						</div>
					</fieldset>
					<div className=''>
						<input
							className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
							type='button'
							value='Sign in'
							onClick={onSignInSubmit}
						/>
					</div>
					<div className='lh-copy mt3'>
						{wrong && (
							<p className='invalid'>It seems like your credentials are wrong!</p>
						)}
						<p className='ma0'>Don't have an account?</p>
						<a
							href='#0'
							className='f5 link black-80 underline-magical'
							onClick={() => onRouteChange('register')}>
							Just register!
						</a>
					</div>
				</form>
			</main>
		</article>
	);
};

export default SignIn;
