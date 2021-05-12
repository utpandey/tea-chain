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

{/* <div className="log-in authform" onSubmit={register}> */ }
	
{/* <button type="button" className="signup__cont__session__right__btn">
Register
</button>
{error.length > 0 && <p>{error}</p>}
<p className="signup__cont__session__right__info--2">
Already have an account? <Link to="/signin">Login</Link>
</p> */}

	return (
		<div className="signup__cont">
			<div className="signup__cont__left">
				<h1 className="signup__cont__left__title">
					Sign Up
				</h1>
				<div className="signup__cont__left__inputCont">
						<input type="email" name="email" id="email" className="signup__cont__left__inputCont__input" required={true} placeholder="Email"/>
				</div>
				<div className="signup__cont__left__inputCont">
						<input type="text" name="firstName" id="firstName" className="signup__cont__left__inputCont__input" required={true} placeholder="First Name"/>
				</div>
				<div className="signup__cont__left__inputCont">
						<input type="text" name="lastName" id="lastName" className="signup__cont__left__inputCont__input" required={true} placeholder="Last Name"/>
				</div>
				<div className="signup__cont__left__inputCont">
						<input type="password" name="password" id="password" className="signup__cont__left__inputCont__input" required={true} placeholder="Password"/>
				</div>
				<div className="signup__cont__left__inputCont">
						<input type="password" name="confirmPass" id="confirmPass" className="signup__cont__left__inputCont__input" required={true} placeholder="Coonfirm Password"/>
				</div>
				<div className="signup__cont__left__otherCont">
					<h1 className="signup__cont__left__otherCont__title">Role</h1>
					{/* <select value={this.state.value} onChange={this.handleChange}> */}
					<select className="signup__cont__left__otherCont__dropDown">
            <option value="Actor1">Actor1</option>
            <option value="Actor2">Actor2</option>
            <option value="Actor3">Actor3</option>
            <option value="Actor4">Actor4</option>
          </select>
				</div>
				<div className="signup__cont__left__otherCont">
					<h1 className="signup__cont__left__otherCont__title">Upload your Profile picture here</h1>
					{/* <select value={this.state.value} onChange={this.handleChange}> */}
					<button className="signup__cont__left__otherCont__imgBtn">
						Image Upload
					</button>
				</div>
				<button className="signup__cont__left__submitBtn">Continue <span>&#10148;</span></button>
				<p className="signup__cont__left__msg">
						Already have an account? <Link to="/signin" className="signup__cont__left__msg__link">Login</Link>
					</p>
			</div>
			<div className="signup__cont__right">
				<p>adsa</p>
			</div>
		</div>
	);
};

export default Signup;


	{/* <div className="signup__cont__session">
				<div className="signup__cont__session__left" />
			
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
					{error.length > 0 && <p>{error}</p>}
					<p className="signup__cont__session__right__info--2">
						Already have an account? <Link to="/signin">Login</Link>
					</p>
				</div>
			</div> */}