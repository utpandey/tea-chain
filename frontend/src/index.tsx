// import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { CSSTransition } from 'react-transition-group';

import './styles/css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Verification from './pages/Verification';

const routes = [
	{ path: '/', name: 'Home', Component: Home },
	{ path: '/signin', name: 'Signin', Component: Signin },
	{ path: '/signup', name: 'Signup', Component: Signup },
	{ path: '/verification/:id', name: 'Verification', Component: Verification }
];

const onEnter = (node: any) => {
	console.log(node.children);

	// gsap.from([".signup__cont__session"], {
	// 	// duration: 3,
	// 	y: 30,
	// 	opacity: 0,
	// 	delay: 0.6,
	// 	ease: 'power3.InOut',
	// 	stagger: {
	// 		amount: 0.6
	// 	}
	// });
};
const onExit = (node: any) => {
	// gsap.to([".signup__cont__session" ], {
	// 	// duration: 3,
	// 	y: -30,
	// 	// opacity: 0,
	// 	// delay: 0.6,
	// 	ease: 'power3.InOut',
	// 	stagger: {
	// 		amount: 0.2
	// 	}
	// });
};

const routing = (
	<Router>
		<motion.div className="container">
			<Header />
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
