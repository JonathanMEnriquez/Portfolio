import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './Main';
import '../css/App.css';
import SideNavToggle from './SideNavToggle';

export default function App() {
  return (
    <Router>
      <div className="container">
        <SideNavToggle toggle={() => console.log('clicked!')} />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/about">
            {() => <div>about</div>}
          </Route>
          <Route path="/portfolio">
            {() => <div>PORTFOLIO HOMESE J AFJEKJ FEJKFEJAKFE AEJ FJAEE</div>}
          </Route>
          <Route path="/contact">
            {() => <div>CONTACT ME COANTQA CONTACT ME</div>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
