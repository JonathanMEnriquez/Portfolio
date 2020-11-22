import React, {useState} from 'react';
import contentJSON from '../json/content.json';
import '../css/Contact.css';
import { motion } from 'framer-motion';
import { google } from '../config/config.json';
import ProfilePic from '../images/profile.jpg';
import CopyDisplay from './CopyDisplay';
import ReactTooltip from 'react-tooltip';

const TOOLTIP_DEFAULT_MSG = 'Click to copy';
const tooltipConfig = {
    place: 'top',
    type: 'dark',
    effect: 'float',
    condition: false
};

const Contact = ({ lang }) => {
    const name = contentJSON.main[lang || 'en'].name;
    const { info, resume, header } = contentJSON.contact[lang || 'en'];
    const [tooltipMessage, setTooltipMessage] = useState(TOOLTIP_DEFAULT_MSG);

    const copyOnClick = () => {
        navigator.clipboard.writeText(info.email)
            .then(() => {
                setTooltipMessage('Copied!');
                setTimeout(() => setTooltipMessage(TOOLTIP_DEFAULT_MSG), 3000);
            });
    };

    return (
        <div className="contact">
            <div className="header">
                <h1>{header}</h1>
            </div>
            <div className="card">
                <header>
                    <div className="headshot">
                        <img src={ProfilePic} alt="*" />
                    </div>
                    <div className="info">
                        <p>{name}</p>
                        <CopyDisplay text={info.email}
                            tooltipMessage={tooltipMessage}
                            tooltipConfig={tooltipConfig}
                            clickHandler={copyOnClick} />
                        <div className="addr">
                            <p><span>{info.city}</span>, <span>{info.state}</span> <span>{info.zip}</span></p>
                        </div>
                        <p className="resume-download">
                        <a href={google.resumeLink} target="_blank" rel="noopener noreferrer" >
                                    {resume.download}
                                </a>
                        </p>
                    </div>
                </header>
                <footer>
                    <div className="top">
                        <div className="history-grid">
                            {resume.history.map((e, k) => (
                                <motion.div key={k}
                                    style={{backgroundColor: e.backgroundcolor}} data-tip data-for={"history" + e.title} >
                                    <img src={e.imageurl} alt={e.title} />
                                    <ReactTooltip id={"history" + e.title}
                                        place={k % 2 === 0 ? 'right' : 'left'}
                                        type={tooltipConfig.type}
                                        effect={tooltipConfig.effect}
                                        condition={tooltipConfig.condition} >
                                        {`${e.title} ${e.tooltip}`}
                                    </ReactTooltip>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="options">
                        <div>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <a href="https://www.linkedin.com/in/jonathan-enriquez/" target="_blank" rel="noopener noreferrer" >
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
                                        xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 512 512" space="preserve">
                                        <g>
                                            <path d="M491.5,0h-471C9.2,0,0,9.2,0,20.5v471C0,502.8,9.2,512,20.5,512h471c11.3,0,20.5-9.2,20.5-20.5v-471
                                            C512,9.2,502.8,0,491.5,0z M151.9,436.3h-76V191.9h76V436.3z M113.9,158.5c-24.3,0-44-19.7-44-44c0-24.3,19.7-44,44-44
                                            s44,19.7,44,44C157.9,138.8,138.2,158.5,113.9,158.5z M436.3,436.3h-75.9V317.4c0-28.4-0.5-64.8-39.5-64.8
                                            c-39.5,0-45.6,30.8-45.6,62.7v120.9h-75.8V191.9h72.8v33.4h1c10.1-19.2,34.9-39.5,71.9-39.5c76.9,0,91.1,50.6,91.1,116.4V436.3z"/>
                                        </g>
                                    </svg>
                                </a>
                            </motion.div>
                        </div>
                        <div>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <a href="https://github.com/JonathanMEnriquez/" target="_blank" rel="noopener noreferrer" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github">
                                        <path d="M7.499,1C3.91,1,1,3.906,1,7.49c0,2.867,1.862,5.299,4.445,6.158C5.77,13.707,6,13.375,6,13.125 c0-0.154,0.003-0.334,0-0.875c-1.808,0.392-2.375-0.875-2.375-0.875c-0.296-0.75-0.656-0.963-0.656-0.963 c-0.59-0.403,0.044-0.394,0.044-0.394C3.666,10.064,4,10.625,4,10.625c0.5,0.875,1.63,0.791,2,0.625 c0-0.397,0.044-0.688,0.154-0.873C4.111,10.02,2.997,8.84,3,7.208c0.002-0.964,0.335-1.715,0.876-2.269 C3.639,4.641,3.479,3.625,3.961,3c1.206,0,1.927,0.873,1.927,0.873s0.565-0.248,1.61-0.248c1.045,0,1.608,0.234,1.608,0.234 S9.829,3,11.035,3c0.482,0.625,0.322,1.641,0.132,1.918C11.684,5.461,12,6.21,12,7.208c0,1.631-1.11,2.81-3.148,3.168 C8.982,10.572,9,10.842,9,11.25c0,0.867,0,1.662,0,1.875c0,0.25,0.228,0.585,0.558,0.522C12.139,12.787,14,10.356,14,7.49 C14,3.906,11.09,1,7.499,1z"/>
                                    </svg>
                                </a>
                            </motion.div>
                        </div>
                        <div>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <a href="mailto:jenriquezdev@gmail.com">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
                                        xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 512 512" space="preserve">
                                        <g>
                                            <path d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
                                                C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
                                                M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
                                                L338.213,256L482,112.212V399.787z"/>
                                        </g>
                                    </svg>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                    <div className="bottom"></div>
                </footer>
            </div>
        </div>
    );
}

export default Contact;
