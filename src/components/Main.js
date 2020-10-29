import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import contentJSON from '../json/content.json';
import codeIcon from '../images/coding.png';
import '../css/Main.css';
import MainPic from './MainPic';
import Button from './Button';
import SocialMedia from './SocialMedia';

const Main = ({ lang }) => {
    const text = contentJSON.main[lang || 'en'];
    const [cursor, setCursor] = useState(false);

    const startCursor = function () {
        let cVal = cursor;
        return setInterval(() => { 
            setCursor(!cVal);
            cVal = !cVal;
        }, 600);
    };

    useEffect(() => {
        const interval = startCursor();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main">
            <section className="info-section">
                <h1 className="header">{text.name}
                    <span>{cursor ? '_' : ' '}</span>
                </h1>
                <div className="slug">
                    <motion.div className="code"
                        whileHover={{ scale: 1.1 }}>
                        <Link to="/portolio">
                            <img src={codeIcon} alt="Summary: " />
                        </Link>
                    </motion.div>
                    <span>{text.slug}</span>
                </div>
                <p className="languages">
                    <Link to="/portfolio?tech=javascript">Javascript</Link>
                    <span> | </span>
                    <Link to="/portfolio?tech=python">Python</Link>
                    <span> | </span>
                    <Link to="/portfolio?tech=java">Java</Link>
                    <span> | </span>
                    <Link to="/portfolio?tech=html">HTML</Link>
                    <span> | </span>
                    <Link to="/portfolio?tech=css">CSS</Link>
                </p>
                {/* // Button
                // social media */}
                <div className="contact">
                    <Button content={<Link to="/contact" >{text.contact}</Link>} callback={null} />
                    <SocialMedia />
                </div>
            </section>
            <section className="pic-section">
                <MainPic />
            </section>
        </div>
    )
}

export default Main;