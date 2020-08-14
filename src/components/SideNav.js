import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/SideNav.css';
import SocialMedia from './SocialMedia';

const SideNav = ({ setLang, history }) => {
    console.log(history && history.location, 'amigo');
    return (
        <div className="side-nav-contents">
            <div className="set-lang">
                <p>Set Language</p>
                <p onClick={() => setLang('en')}>EN</p>
                <p onClick={() => setLang('es')}>ES</p>
            </div>
            <div className="nav-opts">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                            </svg>
                        </NavLink>
                        <NavLink to="/portfolio" activeClassName="active">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                            </svg>
                        </NavLink>
                        <NavLink to="/about" exact activeClassName="active">
                           <svg xmlns="http://www.w3.org/2000/svg" 
                                height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                            </svg>
                        </NavLink>
                        <NavLink to="/contact" exact activeClassName="active">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
                            </svg>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <SocialMedia />
        </div>
    );
}

export default SideNav;
