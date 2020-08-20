import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import contentJSON from '../json/content.json';
import '../css/Portfolio.css';

const Portfolio = ({ lang }) => {
    const text = contentJSON.main[lang || 'en'];

    return (
        <div className="portfolio">
            <div className="header">
            <iframe width={window.innerWidth} height={window.innerHeight} src="https://www.youtube.com/embed/fa5ITnmzV84?&version=3&rel=0&loop=1&autoplay=1&showinfo=0&controls=0&autohide=1" 
                allow="accelerometer; autoplay; loop; controls; encrypted-media; gyroscope; picture-in-picture" frameborder="0" allowfullscreen></iframe>
                {/* <iframe width={window.innerWidth} height={window.innerHeight} 
                    src="https://www.youtube.com/embed/fa5ITnmzV84" 
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                {/* <div className="header-info">
                    <h1>portfolio snippets</h1>
                    <Button content={<Link to="/contact" >{text.contact}</Link>} callback={null} />
                </div> */}
            </div>
        </div>
    );
}

export default Portfolio;