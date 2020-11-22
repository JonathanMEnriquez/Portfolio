import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import '../css/PortfolioVideo.css';

let listenerId = null;
let attr = null;

const PortfolioVideo = ({ headerRef, windowListener }) => {
    useEffect(() => {
        return () => {
            windowListener.unsubscribe(listenerId);
            listenerId = null;
        };
    }, []);

    const opts = {
        height: window.innerHeight,
        width: window.innerWidth,
        playerVars: {
            autoplay: 1,
            loop: 1
        }
    };

    const windowResized = ({ width, height }) => {
        const currWidth = attr && parseInt(attr.getNamedItem('width').value);
        if (currWidth !== width) {
            const newWidth = document.createAttribute('width');
            newWidth.value = width;
            attr.setNamedItem(newWidth);
        }
    };

    const setAttr = e => {
        attr = headerRef.current.children[1].children[0].attributes;
        listenerId = windowListener.subscribe(windowResized);
        e.target.mute();
    };

    const stateChangeHandler = e => {
        if (e.data !== 2) {
            e.target.playVideo();
        }
    } 

    return <YouTube opts={opts} 
            onStateChange={stateChangeHandler} 
            videoId="2LjshnQTQsM"
            onReady={setAttr} />
}

export default PortfolioVideo;
