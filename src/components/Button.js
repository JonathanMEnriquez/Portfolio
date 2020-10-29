import React from 'react';
import '../css/Button.css';

const Button = ({ content, callback }) => (
    <button className="button" 
        onClick={() => { if (callback) callback() }}>
        {content}
    </button>
);

export default Button;