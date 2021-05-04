import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

import './styles/css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const routing = (
	<Router>
		<motion.div className="container">
			<Header />
			<AnimatePresence exitBeforeEnter={true}>
				<Switch>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</AnimatePresence>
			<Footer />
		</motion.div>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));
