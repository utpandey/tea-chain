import { useState } from 'react';
// import { onRegister } from '../components/authapi';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [ { username, password, repeatPassword }, setRegisterData ] = useState({
		username: '',
		password: '',
		repeatPassword: ''
	});

	// const [ error, setError ] = useState('');

	// const register = async (event: React.FormEvent) => {
	// 	event.preventDefault();
	// 	if (password === repeatPassword) {
	// 		const response = await onRegister({
	// 			username,
	// 			password
	// 		});

	// 		if (response && response.error) {
	// 			setError(response.error);
	// 		}
	// 	} else {
	// 		setError('password and repeat password must match');
	// 	}
	// };

	return (
		<div className="signup__cont">
			<div className="signup__cont__session">
				<div className="signup__cont__session__left" />
				{/* <div className="log-in authform" onSubmit={register}> */}
				<div className="signup__cont__session__right authform">
					<h4 className="signup__cont__session__right__title">
						<span>Sign Up</span>
					</h4>
					<p className="signup__cont__session__right__info--1">Welcome! Create your account</p>
					<input
						className="signup__cont__session__right__input"
						type="text"
						value={username}
						placeholder="Username"
						name="username"
						onChange={(event) =>
							setRegisterData({
								username: event.target.value,
								password,
								repeatPassword
							})}
					/>

					<input
						className="signup__cont__session__right__input"
						type="password"
						value={password}
						placeholder="Password"
						name="password"
						onChange={(event) =>
							setRegisterData({
								username,
								password: event.target.value,
								repeatPassword
							})}
					/>

					<input
						className="signup__cont__session__right__input"
						type="password"
						value={repeatPassword}
						placeholder="Repeat password"
						name="repeatPassword"
						onChange={(event) =>
							setRegisterData({
								username,
								password,
								repeatPassword: event.target.value
							})}
					/>
					<button type="button" className="signup__cont__session__right__btn">
						Register
					</button>
					{/* {error.length > 0 && <p>{error}</p>} */}
					<p className="signup__cont__session__right__info--2">
						Already have an account? <Link to="/signin">Login</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signup;
