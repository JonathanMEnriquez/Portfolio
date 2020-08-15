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

const toonArr = [toon1, toon2, toon3, toon4, toon5, toon6, toon7, toon8, toon9, toon10,
    toon11, toon12, toon13, toon14, toon15, toon16];

const Gallery = () => {
    const [arr, setArr] = useState(toonArr);

    const shuffle = () => {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        console.log(arr.length);
        setArr(copy);
    }

    useEffect(() => shuffle(), []);

    return (
        <div className="gallery">
            {arr.map((pic, key) =>
                <GalleryImage key={key} img={pic} />
            )}
        </div>
    );
}

export default Gallery;