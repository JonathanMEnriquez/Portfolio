import React, {createRef, useEffect, useState} from 'react';
import { motion } from "framer-motion";

const maxHeight = 64;

const setPixels = num => `${num}px`;

const TechImage = ({ src }) => {
    const imageRef = createRef();
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(maxHeight);

    useEffect(() => {
        const ratio = imageRef.current.naturalWidth / imageRef.current.naturalHeight;
        setWidth(maxHeight * ratio);
    }, [imageRef]);

    return (
        <motion.div style={{display: 'inline-block'}} whileHover={{ scale: 1.1 }}>
            <img src={src} alt="" ref={imageRef}
                style={{ width: setPixels(width), height: setPixels(height), margin: '1vh 1vw' }} />
        </motion.div>
    )
}

export default TechImage;
