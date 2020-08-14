import React, { useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import Main from './Main';
import '../css/App.css';
import MenuToggle from './MenuToggle';
import SideNav from './SideNav';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 36px 36px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(36px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export default function App() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [lang, setLang] = useState('en');
  let history = useHistory();
  console.log('oh no! ', history);

  return (
    <Router>
      <div className="container">
        <motion.nav initial={false}
          animate={isOpen ? 'open' : 'closed'}>
          <motion.div className="background"
            variants={sidebar}>
              <SideNav setLang={setLang} history={history} />
          </motion.div>
          <MenuToggle toggle={toggleOpen} />
        </motion.nav>

        <Switch>
          <Route path="/" exact>
            <Main lang={lang} />
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
