import React from 'react';
import dev from '../images/dev3.png';
import '../css/MainPic.css';

const MainPic = () => {
    return (
        <div className="images-wrapper">
            <img className="piece-1" src={dev} alt="" />
            <img className="piece-2" src={dev} alt="" />
            <img className="piece-3" src={dev} alt="" />
            <img className="piece-4" src={dev} alt="" />
            <img className="mobile-img" src={dev} alt="" />
        </div>
    );
}

export default MainPic;