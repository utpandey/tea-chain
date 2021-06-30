// import React from 'react';
import ReactDOM from "react-dom";
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Provider, useSelector } from "react-redux";
import configureStore from "./store/setupStore";
import "./styles/css/index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Verification from "./pages/Verification";
import ResetPassword from "./pages/ResetPassword";
import Admin from "./pages/Admin";
import Status from "./pages/Status";
import { getUserStateReducer } from "./store/auth";

// const routes = [
// 	{ path: '/', name: 'Home', Component: Home },
// 	{ path: '/signin', name: 'Signin', Component: Signin },
// 	{ path: '/signup', name: 'Signup', Component: Signup },
// 	{ path: '/verification/:id', name: 'Verification', Component: Verification }
// ];

// const onEnter = (node: any) => {};
// const onExit = (node: any) => {};
const store = configureStore();

const Routing = () => {
  const isAuthenticated = useSelector(getUserStateReducer);

  return (
    <Router>
      <motion.div className="container">
        <Header />
        <AnimatePresence exitBeforeEnter={true}>
          <Switch>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route exact={true} path="/signin">
              {isAuthenticated ? <Redirect to="/admin" /> : <Signin />}
            </Route>
            <Route exact={true} path="/signup">
              {isAuthenticated ? <Redirect to="/admin" /> : <Signup />}
            </Route>
            <Route path="/verification/:id">
              <Verification />
            </Route>
            <Route path="/resetpassword/:id">
              <ResetPassword />
            </Route>
            <Route exact={true} path="/admin">
              {isAuthenticated ? <Admin /> : <Redirect to="signin" />}
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
      <Route exact={true} path="/status">
        <Status />
      </Route>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById("root")
);

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
