import React, { useEffect, useState } from 'react';
import toon1 from '../images/toon1.png';
import toon2 from '../images/toon2.png';
import toon3 from '../images/toon3.png';
import toon4 from '../images/toon4.png';
import toon5 from '../images/toon5.png';
import toon6 from '../images/toon6.png';
import toon7 from '../images/toon7.png';
import toon8 from '../images/toon8.png';
import toon9 from '../images/toon9.png';
import toon10 from '../images/toon10.png';
import toon11 from '../images/toon11.png';
import toon12 from '../images/toon12.png';
import toon13 from '../images/toon13.png';
import toon14 from '../images/toon14.png';
import toon15 from '../images/toon15.png';
import toon16 from '../images/toon16.png';
import '../css/Gallery.css';
import GalleryImage from './GalleryImage';

const toonArr = [
    { name: 'toon1', img: toon1 }, { name: 'toon2', img: toon2 }, { name: 'toon3', img: toon3 }, 
    { name: 'toon4', img: toon4 }, { name: 'toon5', img: toon5 }, { name: 'toon6', img: toon6 }, 
    { name: 'toon7', img: toon7 }, { name: 'toon8', img: toon8 }, { name: 'toon9', img: toon9 }, 
    { name: 'toon10', img: toon10 }, { name: 'toon11', img: toon11 }, { name: 'toon12', img: toon12 }, 
    { name: 'toon13', img: toon13 }, { name: 'toon14', img: toon14 }, { name: 'toon15', img: toon15 }, 
    { name: 'toon16', img: toon16 }
];

const tooltipConfig = {
    place: 'top',
    type: 'dark',
    effect: 'float',
    condition: false
}

const Gallery = ({ content }) => {
    const [arr, setArr] = useState(toonArr);

    const shuffle = () => {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }

        setArr(copy);
    }

    useEffect(() => shuffle(), []);

    return (
        <div className="gallery">
            <svg onClick={ shuffle } 
                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 96 96" space="preserve">
                <g id="XMLID_1_">
                    <path id="XMLID_6_" d="M49.3,41.8l4.1-5.1l0,0c3.2-3.7,7.9-5.8,12.8-5.8h7.2l-6.2-6.2l2.7-2.7l10.8,10.8L69.7,43.7L67,41l6.2-6.2
                        h-7.2c-3.7,0-7.3,1.6-9.8,4.4l-4.1,5.1L49.3,41.8z M37.6,56.3L37.6,56.3c-2.6,3.1-6.3,4.9-10.4,4.9H15.5V65h11.7
                        c5.2,0,10-2.3,13.2-6.3l0,0l3.6-4.4l-2.9-2.4L37.6,56.3z M67,55l6.2,6.2h-7.2c-4,0-7.7-1.8-10.2-4.8L39.8,36.5l0,0
                        C36.5,33,32,31,27.2,31H15.5v3.8h11.7c3.8,0,7.4,1.6,9.9,4.4l15.7,19.4l0,0C56,62.7,60.9,65,66.1,65h7.2L67,71.2l2.7,2.7l10.8-10.8
                        L69.7,52.3L67,55z"/>
                </g>
            </svg>
            {arr.map((entry, key) =>
                <GalleryImage key={key} 
                    img={entry.img}
                    tooltipMessage={content[entry.name]}
                    tooltipConfig={tooltipConfig} />
            )}
        </div>
    );
}

export default Gallery;