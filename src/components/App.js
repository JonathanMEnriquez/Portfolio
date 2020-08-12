import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { motion, useCycle } from 'framer-motion';
import Main from './Main';
import logo from '../images/logo.svg';
import '../css/App.css';
import SideNavToggle from './SideNavToggle';

export default function App() {
  return (
    <Router>
      <div className="main">
        <SideNavToggle toggle={() => console.log('clicked!')} />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/about">
            {() => <div>about</div>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
