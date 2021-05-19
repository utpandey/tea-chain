import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap, TimelineLite, Power3 } from 'gsap';
import { useDispatch } from 'react-redux';
import md5 from 'md5';

import signin1 from '../assets/signin1.png';
import signin2 from '../assets/signin2.png';
import { LOGIN } from 'src/store/auth';
import axios from '../utils/axios';
import Snackbar from '../components/Snackbar'

const Signin = () => {
	const tlite = new TimelineLite({ delay: 0.3 });
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({
		isError: false,
		errorMessage: ''
	})
	const [ { email, password }, setCredentials ] = useState({
		email: '',
		password: ''
	});

	useEffect(
		() => {
			tlite.from('.signup__cont__left',
				{
					y: 15,
					opacity: 0,
					ease: Power3.easeIn,
					delay: 0.2
				}, 'Start')
				.from('.signupImg--1', {
					y: 15,
					opacity: 0,
					ease: Power3.easeIn,
					delay: 0,
				})
				.from('.signupImg--2', {
					y: 15,
					opacity: 0,
					ease: Power3.easeIn,
					delay: 0.
			})
		},
		[]
	);

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

	const handleSignin =(event: React.MouseEvent<HTMLButtonElement>)=> {
		event.preventDefault();
		setLoading(true);
		const postData = {
			email,
			password: md5(password),
		};
		axios.post('/authentication/login', postData)
			.then(res => {
				console.log(res);
				if(res && res.data.user && res.data.user.profile.picture) {
					dispatch(LOGIN({
						type: res.data.user.type,
						profile: {
							name: res.data.user.profile.name,
							picture: res.data.user.profile.picture
						}
					}));
				} else if (res && res.data) {
					dispatch(LOGIN({
						type: res.data.user.type,
						profile: {
							name: res.data.user.profile.name,
							picture: ''
						}
					}))
				}
			})
			.catch(err => {
				console.log(err);
				setError({
					isError: true,
					errorMessage: err.name,
				})
			})
			.finally(() => {
				setLoading(false);
			})
	}

	const clearError =()=> {
		setError({
			isError: false,
			errorMessage: '',
		})
	}

	return (
		<div className="signup__cont">
			{error.isError && <Snackbar status="error" message={error.errorMessage} clearError={clearError} />}
			<div className="signup__cont__left">
				<h1 className="signup__cont__left__title">Sign In</h1>
				<div className="signup__cont__left__inputCont">
					<input
						type="email"
						name="email"
						onChange={(e)=> setCredentials({...{password}, email: e.target.value})}
						id="email"
						className="signup__cont__left__inputCont__input"
						required={true}
						placeholder="Email"
					/>
				</div>
				<div className="signup__cont__left__inputCont">
					<input
						type="password"
						name="password"
						onChange={(e)=> setCredentials({...{email}, password: e.target.value})}
						id="password"
						className="signup__cont__left__inputCont__input"
						required={true}
						placeholder="Password"
					/>
				</div>

				<p className="signup__cont__left__msg">
					Forgot Password?{' '}
					<Link to="/" className="signup__cont__left__msg__link">
						Click here
					</Link>
				</p>

				<button onClick={handleSignin} className="signup__cont__left__submitBtn">
					Continue <span>&#10148;</span>
				</button>
				<p className="signup__cont__left__msg">
					Need an account?{' '}
					<Link to="/signup" className="signup__cont__left__msg__link">
						Register now
					</Link>
				</p>
			</div>
			<div className="signup__cont__right">
				<img src={signin1} alt="" className="signup__cont__right__img signupImg--1" />
				<img src={signin2} alt="" className="signup__cont__right__img signupImg--2" />
				{/* <img src={ signup3} alt="" className="signup__cont__right__img signupImg--3"/> */}
			</div>
		</div>
	);
};

export default Signin;
