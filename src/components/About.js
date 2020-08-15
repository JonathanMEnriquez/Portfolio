import React from 'react';
import ContentJSON from '../json/content.json';
import '../css/About.css';
import Gallery from './Gallery';

const About = ({ lang }) => {
    const text = ContentJSON.about[lang || 'en'];
    
    return (
        <div className="about">
            <section className="info">
                <h1>{text.header}</h1>
                <p>{text.story.main}</p>
                <p>{text.story.main_2}</p>
                <p>{text.story.main_3}</p>
                <p className="question">{text.story.enjoy_most_q}</p>
                <p>{text.story.enjoy_most_a}</p>
                <p className="question">{text.story.hobbies_q}</p>
                <p>{text.story.hobbies_a}</p>
            </section>
            <section className="pics">
                <Gallery />
            </section>
        </div>
    );
}

export default About;
