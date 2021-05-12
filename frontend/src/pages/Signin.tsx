import { useState } from 'react';
// import { onLogin } from '../components/authapi';
import { Link } from 'react-router-dom';
// import './Login.scss';
// import './Login.style.scss';

const Signin = () => {
	const [ { email, password }, setCredentials ] = useState({
		email: '',
		password: ''
	});

	// const [ error, setError ] = useState('');

	// const login = async (event: React.FormEvent) => {
	// 	event.preventDefault();
	// 	const response = await onLogin({
	// 		email,
	// 		password
	// 	});

	// 	if (response && response.error) {
	// 		setError(response.error);
	// 	}
	// };

	return (
		<div className="signup__cont">
			<div className="signup__cont__session">
				<div className="signup__cont__session__left" />
				{/* <div className="log-in authform" onSubmit={login}> */}
				<div className="signup__cont__session__right authform">
					<h4 className="signup__cont__session__right__title">
						<span>Sign In</span>
					</h4>
					<p className="signup__cont__session__right__info--1">Welcome back! Log in to your account</p>
					<div className="div">
					<input
						required={true}
						className="signup__cont__session__right__input"
						type="input"
						placeholder="Email"
						value={email}
						id="email"
						onChange={(event) =>
							setCredentials({
								email: event.target.value,
								password
							})}
					/>
					</div>
				
					<label htmlFor="email" className="signup__cont__session__right__label">
						email
					</label>
					<input
						className="signup__cont__session__right__input"
						type="password"
						placeholder="Password"
						value={password}
						onChange={(event) =>
							setCredentials({
								email,
								password: event.target.value
							})}
					/>
					<label htmlFor="password" className="signup__cont__session__right__label">
						Password
					</label>
					<button type="button" className="signup__cont__session__right__btn">
						Login
					</button>
					{/* {error.length > 0 && <p>{error}</p>} */}
					<p className="signup__cont__session__right__info--2">
						Need an account? <Link to="/signup">Register now</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signin;
