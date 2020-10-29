import React from 'react';
import '../css/GalleryImage.css';
import ReactTooltip from 'react-tooltip';

const GalleryImage = ({ img, tooltipMessage, tooltipConfig }) => {
    return (
            <div className="gallery-image" 
                style={{backgroundImage: `url(${img})`}}
                data-tip data-for={img} >
                <ReactTooltip id={img}
                    type={tooltipConfig.type}
                    effect={tooltipConfig.effect}
                    condition={tooltipConfig.condition} >
                    {tooltipMessage}
                </ReactTooltip>
            </div>
    );
}

export default GalleryImage;