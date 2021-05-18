import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TimelineLite, Power3 } from 'gsap';
import { BiLoaderAlt, BiErrorCircle } from 'react-icons/bi'
import { GoVerified } from 'react-icons/go'
import md5 from 'md5';

import signin1 from '../assets/signin1.png';
import signin2 from '../assets/signin2.png';
import axios from 'src/utils/axios';
import Snackbar from 'src/components/Snackbar';

const ResetPassword = () => {

	const resetToken = useParams<{ id: string }>();
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState(false);
	const [error, setError] = useState({
		isError: false,
		errorMessage: '',
	});
	const [isUpdated, setIsUpdated] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	useEffect(
		() => {
			const tlite = new TimelineLite({ delay: 0.3 });
			tlite.from('.resetpassword__cont__left',
				{
					y: 15,
					opacity: 0,
					ease: Power3.easeIn,
					delay: 0.2
				}, 'Start')
				.from('.resetPasswordImg--1', {
					y: 15,
					opacity: 0,
					ease: Power3.easeIn,
					delay: 0,
				})
				.from('.resetPasswordImg--2', {
					y: 15,
					opacity: 0,
					ease: Power3.easeIn,
					delay: 0.
				})
		}, []
	);

	const handleFormSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (password === confirmPassword) {
			setLoading(true);
			setIsUpdated(true);
			axios.post('/authentication/updatePassword', {
				email,
				password: md5(password),
				resetToken: resetToken.id
			}).then((res) => {
				console.log(res)
			}).catch((err) => {
				console.log(err, err.message)
				setApiError(true);
			}).finally(() => {
				setLoading(false);
			})
		} else {
			setError({
				isError: true,
				errorMessage: 'The provided passwords do not match'
			});
		}
	}

	const clearError = () => {
		setError({
			isError: false,
			errorMessage: '',
		})
	};

	return (
		<div className="resetpassword">
			{
				isUpdated ?
					(
						loading ?
							(
								<div className="resetpassword__result">
									<BiLoaderAlt className="resetpassword__result__loading__icon" size={72} />
								</div>
							)
							:
							(
								apiError ? (
									<div className="resetpassword__result">
										<div className="resetpassword__result__verified__cont">
											<BiErrorCircle className="resetpassword__result__verified__cont__icon__invalid" size={72} />
											<h1>An error was encountered while updating your password.</h1>
										</div>
									</div>
								) : (
									<div className="resetpassword__result">
										<div className="resetpassword__result__verified__cont">
											<GoVerified className="resetpassword__result__verified__cont__icon" size={72} />
											<h1>Congratulations! Your password has been updated.</h1>
										</div>
									</div>
								)
							)
					) : (
						<div className="resetpassword__cont">
							{error.isError && <Snackbar status="error" message={error.errorMessage} clearError={clearError} />}
							<form onSubmit={handleFormSubmit} className="resetpassword__cont__left">
								<h1 className="resetpassword__cont__left__title">Update Password</h1>
								<div className="resetpassword__cont__left__inputCont">
									<input
										type="email"
										name="email"
										id="email"
										autoComplete="username"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="resetpassword__cont__left__inputCont__input"
										required={true}
										placeholder="Email"
									/>
								</div>
								<div className="resetpassword__cont__left__inputCont">
									<input
										type="password"
										name="password"
										id="password"
										autoComplete="new-password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="resetpassword__cont__left__inputCont__input"
										required={true}
										placeholder="Password"
									/>
								</div>
								<div className="resetpassword__cont__left__inputCont">
									<input
										type="password"
										name="confirm_password"
										id="confirm_password"
										autoComplete="new-password"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										className="resetpassword__cont__left__inputCont__input"
										required={true}
										placeholder="Confirm Password"
									/>
								</div>

								<button type="submit" className="resetpassword__cont__left__submitBtn">
									Continue <span>&#10148;</span>
								</button>
							</form>
							<div className="resetpassword__cont__right">
								<img src={signin1} alt="" className="resetpassword__cont__right__img resetPasswordImg--1" />
								<img src={signin2} alt="" className="resetpassword__cont__right__img resetPasswordImg--2" />
							</div>
						</div>
					)
			}
		</div>
	);
};

export default ResetPassword;
