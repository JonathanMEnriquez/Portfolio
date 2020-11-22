import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import '../css/TechGallery.css';
import TechImage from './TechImage';

const TechGallery = ({ text, images }) => {
    const [showHint, setShowHint] = useState(true);

    const techImages = [[images.javascript, 'Javascript'], [images.react, 'React'], [images.node, 'Node'], [images.express, 'Express'], [images.angular, 'Angular'], [images.knockoutjs, 'KnockoutJS'], [images.jquery, 'JQuery'],
                [images.python, 'Python'], [images.django, 'Django'],
                [images.html, 'HTML'], [images.css, 'CSS'],
                [images.java, 'Java'], [images.aws, 'AWS'], [images.mysql, 'MySQL'], [images.mongodb, 'MongoDB']];

    return (
        <div className="gallery-container">
            <motion.div className={showHint ? 'display-info' : 'hidden'}
                animate={{ y: 0 }} initial={{ y: 300 }} transition={{ duration: 0.5, type: "spring" }} >
                <span className="close"
                    onClick={() => setShowHint(false)}>x</span>
                <p>{text.instructions}</p>
                <p>({text.sub})</p>
            </motion.div>
            <div className="tech-gallery">
                {techImages.map((en, k) => 
                    <Link to={`/portfolio?tech=${en[1]}`} key={k} style={{cursor: 'pointer'}} >
                        <TechImage src={en[0]} alt={en[1]} />
                    </Link>
                )}
            </div>
        </div>
        )
}

export default TechGallery;
