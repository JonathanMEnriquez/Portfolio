import React, {createRef, useEffect, useState} from 'react';
import { motion } from "framer-motion";

const maxHeight = 64;

const setPixels = num => `${num}px`;

const TechImage = ({ src, alt }) => {
    const imageRef = createRef();
    const [width, setWidth] = useState(0);
    const [height] = useState(maxHeight);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (imageRef.current && imageRef.current.naturalWidth) {
            const ratio = imageRef.current.naturalWidth / imageRef.current.naturalHeight;
            setWidth(maxHeight * ratio);
        } else {
            setToggleDelay();
        }
    }, [imageRef, toggle]);

    /* the useEffect above not working properly because the imageRef sometimes fires without having set the naturalWidth property 
        -- this is a workaround */
    const setToggleDelay = () => {
        setTimeout(() => setToggle(!toggle), 150);
    };

    return (
        <motion.div style={{display: 'inline-block'}} whileHover={{ scale: 1.1 }}>
            <img src={src} alt={alt} ref={imageRef}
                style={{ width: setPixels(width), height: setPixels(height), margin: '1vh 1vw' }} />
        </motion.div>
    )
}

export default TechImage;
