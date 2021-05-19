// import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { Provider } from 'react-redux';
import configureStore from './store/setupStore'
import './styles/css/index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Verification from './pages/Verification';
import ResetPassword from './pages/ResetPassword';
import Admin from './pages/Admin'

// const routes = [
// 	{ path: '/', name: 'Home', Component: Home },
// 	{ path: '/signin', name: 'Signin', Component: Signin },
// 	{ path: '/signup', name: 'Signup', Component: Signup },
// 	{ path: '/verification/:id', name: 'Verification', Component: Verification }
// ];

// const onEnter = (node: any) => {};
// const onExit = (node: any) => {};
const store = configureStore();

const routing = (
	<Router>
		<motion.div className="container">
			<Header />
			<Provider store={store}>
				<AnimatePresence exitBeforeEnter={true}>
					<Switch>
						<Route exact={true} path="/">
							<Home />
						</Route>
						<Route exact={true} path="/signin">
							<Signin />
						</Route>
						<Route exact={true} path="/signup">
							<Signup />
						</Route>
						<Route path="/verification/:id">
							<Verification />
						</Route>
						<Route path="/resetpassword/:id">
							<ResetPassword />
						</Route>
						<Route exact={true} path="/admin">
							<Admin />
						</Route>
					</Switch>
					{/* {routes.map(({ path, name, Component }) => (
						<Route key={name} path={path} exact={true}>
							{({ match }) => (
								<CSSTransition
									in={match != null}
									timeout={1200}
									classNames="page"
									onExit={onExit}
									onEntering={onEnter}
									unmountOnExit={true}
								>
									<div className="page">
										<Component />
									</div>
								</CSSTransition>
							)}
						</Route>
					))} */}
				</AnimatePresence>
			</Provider>
			<Footer />
		</motion.div>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// <Switch>
// <Route exact={true} path="/">
// 	<Home />
// </Route>
// <Route exact={true} path="/signin">
// 	<Signin />
// </Route>
// <Route exact={true} path="/signup">
// 	<Signup />
// </Route>
// <Route path="/verification/:id">
// 	<Verification />
// </Route>
// </Switch>
