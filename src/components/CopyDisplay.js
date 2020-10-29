import React from 'react';
import ReactTooltip from 'react-tooltip';

const CopyDisplay = ({ text, clickHandler, tooltipMessage, tooltipConfig }) => (
    <span 
        onClick={clickHandler}
        style={{ cursor: 'pointer' }}
        data-tip data-for="copy-email" >
        {text}
        <input readOnly value={text} style={{display: 'none'}} />
        <ReactTooltip id="copy-email"
            type={tooltipConfig.type}
            effect={tooltipConfig.effect}
            condition={tooltipConfig.condition} >
            {tooltipMessage}
        </ReactTooltip>
    </span>
)

export default CopyDisplay;
