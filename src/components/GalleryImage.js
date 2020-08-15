import React from 'react';
import '../css/GalleryImage.css';

const GalleryImage = ({ img }) => {
    return (
        <div className="gallery-image" 
            style={{backgroundImage: `url(${img})`}}></div>
    );
}

export default GalleryImage;