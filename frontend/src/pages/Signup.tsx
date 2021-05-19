import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap, TimelineLite, Power3 } from 'gsap';
import { useDispatch } from 'react-redux';
import md5 from 'md5';

import { LOGIN } from '../store/auth';
import signup1 from '../assets/signup1.png'
import signup2 from '../assets/signup2.png'
import signup3 from '../assets/signup3.png'
import Snackbar from '../components/Snackbar'
import axios from '../utils/axios'

const Signup = () => {
	const tlite = new TimelineLite({ delay: 0.3 });
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [fName, setFName] = useState('');
	const [lName, setLName] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [type, setType] = useState('Farmer');
	const [pictureBase64, setPictureBase64] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({
		isError: false,
		errorMessage: '',
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

	const handleSignupSubmit =()=> {
		const postData = {
			email,
			password: md5(password),
			type,
			profile: {
				name: fName + lName,
				picture: pictureBase64,
			}
		};
		if(password !== repeatPassword) {
			setError({
				isError: true,
				errorMessage: 'Passwords do not match.'
			})
		}
		if(email.length < 3) {
			setError({
				isError: true,
				errorMessage: 'Please enter a valid email.'
			})
		}
		if((fName + lName).length < 3) {
			setError({
				isError: true,
				errorMessage: 'Please enter a valid name.'
			})
		}
		setLoading(true);
		axios.post('/authentication/register', postData)
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

	const getBase64 =(file:File)=> {
		return new Promise((res, rej) => {
			let document = "";
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
					document = (reader.result as string);
					res(document);
			};
			reader.onerror = (err) => {
					console.log('Error: ', err);
					rej(err);
			};
		})
	}

	const handleImageChange =(event: React.ChangeEvent<HTMLInputElement>)=> {
		try {
			if(event.target.files && event.target.files[0]) {
				const file = event.target.files[0]
				if (file) {
					getBase64(file).then(data => {
						setPictureBase64((data as string));
					})
				}
			}
		} catch (err) {
			console.log(err);
		}
	}

	const clearError =()=> {
		setError({
			isError: false,
			errorMessage: '',
		})
	}


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
			<img id="imgTest" alt="" />
			{error.isError && <Snackbar status="error" message={error.errorMessage} clearError={clearError} />}
			<div className="signup__cont__left">
				<h1 className="signup__cont__left__title">
					Sign Up
				</h1>
				<div className="signup__cont__left__inputCont">
						<input type="email" onChange={(e)=> setEmail(e.target.value)} name="email" id="email" className="signup__cont__left__inputCont__input" required={true} placeholder="Email"/>
				</div>
				<div className="signup__cont__left__inputCont">
						<input type="text" onChange={(e)=> setFName(e.target.value)} name="firstName" id="firstName" className="signup__cont__left__inputCont__input" required={true} placeholder="First Name"/>
				</div>
				<div className="signup__cont__left__inputCont">
						<input type="text" onChange={(e)=> setLName(e.target.value)} name="lastName" id="lastName" className="signup__cont__left__inputCont__input" required={true} placeholder="Last Name"/>
				</div>
				<div className="signup__cont__left__inputCont">
						<input type="password" onChange={(e)=> setPassword(e.target.value)} name="password" id="password" className="signup__cont__left__inputCont__input" required={true} placeholder="Password"/>
				</div>
				<div className="signup__cont__left__inputCont">
						<input type="password" onChange={(e)=> setRepeatPassword(e.target.value)} name="confirmPass" id="confirmPass" className="signup__cont__left__inputCont__input" required={true} placeholder="Confirm Password"/>
				</div>
				<div className="signup__cont__left__otherCont">
					<h1 className="signup__cont__left__otherCont__title">Role</h1>
					{/* <select value={this.state.value} onChange={this.handleChange}> */}
					<select onChange={(e)=> setType(e.target.value)} className="signup__cont__left__otherCont__dropDown">
            <option value="Farmer">Farmer</option>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Wholesaler">Wholesaler</option>
            <option value="Distributer">Distributer</option>
            <option value="Retailer">Retailer</option>
          </select>
				</div>
				<div className="signup__cont__left__otherCont">
					<h1 className="signup__cont__left__otherCont__title">Upload your Profile picture here</h1>
					{/* <select value={this.state.value} onChange={this.handleChange}> */}
					<input type="file" name="avatar" onChange={(e)=> handleImageChange(e)} accept=".jpeg, .png, .jpg" className="signup__cont__left__otherCont__imgBtn" />
				</div>
				<button onClick={handleSignupSubmit} className="signup__cont__left__submitBtn">Continue <span>&#10148;</span></button>
				<p className="signup__cont__left__msg">
						Already have an account? <Link to="/signin" className="signup__cont__left__msg__link">Login</Link>
					</p>
			</div>
			<div className="signup__cont__right">
				<img src={signup1} alt="" className="signup__cont__right__img signupImg--1" />
				<img src={signup2} alt="" className="signup__cont__right__img signupImg--2" />
				{/* <img src={ signup3} alt="" className="signup__cont__right__img signupImg--3"/> */}
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