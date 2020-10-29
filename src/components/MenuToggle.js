import React from 'react';
import { motion } from "framer-motion";
import '../css/MenuToggle.css';

const svgVariants = {
    hidden: {
        pathLength: 0,
        scale: 0.5,
        fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      scale: [0.6, 1, 1, 1, 1],
      fill: "rgba(255, 255, 255, 1)",
      transition: {
          duration: 2,
          ease: 'easeInOut'
      }
    }
};

const MenuToggle = (props) => {
    const { toggle } = props;

    return (
        <motion.button className="menu-toggle"
                onClick={toggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 90 200"
                className="item"
            >
                <motion.path
                    d="M 138.914062 76.839844 L 138.914062 116.527344 C 138.914062 138.914062 120.476562 151.789062 99.40625 151.789062 C 78.335938 151.789062 61.070312 138.914062 61.070312 116.527344 L 61.070312 103.210938 L 85.796875 103.210938 L 85.796875 116.085938 C 85.796875 124.132812 91.796875 128.378906 99.40625 128.378906 C 107.015625 128.378906 112.136719 124.28125 112.136719 116.085938 L 112.136719 76.839844 Z M 138.914062 71.503906 L 112.136719 71.503906 L 112.136719 71.480469 L 94.933594 71.472656 L 81.492188 48.191406 L 138.914062 48.191406 L 138.914062 71.503906 "
                    variants={svgVariants}
                    initial="hidden"
                    animate="visible"
                />
            </motion.svg>
        </motion.button>
    )
}

export default MenuToggle;