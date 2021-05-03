import React from 'react';
import ReactDOM from 'react-dom';
import { Switch,Route, BrowserRouter as Router } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'

import './styles/css/index.css';
import Header from './components/Header';
import Home from './pages/Home';

const routing = (
  <Router >
    <React.Fragment>
        <Header />
        {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
          <AnimatePresence exitBeforeEnter={true}>
            <Switch >
              {/* <Route path="/base">
                <Base addBase={addBase} base={base} toppings={toppings}  setShowModal={setShowModal} />
              </Route>
              <Route path="/toppings">
                <Toppings addTopping={addTopping} base={base} toppings={toppings} />
              </Route>
              <Route path="/order">
                <Order addBase={addBase}  base={base} toppings={toppings} setShowModal={setShowModal}/>
              </Route> */}
               {/* component={Home} component={UsersPage} / */}
              <Route path="/users" >
                {/* <UsersPage /> */}
              </Route>
              <Route path="/repolist" >
                {/* <RepoPage /> */}
              </Route>
              <Route path='/repo'>
                {/* <Repository /> */}
              </Route>
              <Route path="/" >
                <Home />
              </Route>
                {/* <UsersPage /> */} 
              
                {/* <Home />
              </Route> */}
              
              </Switch>
          </AnimatePresence>
        </React.Fragment>
        </Router>
)

ReactDOM.render(routing,document.getElementById('root'));
