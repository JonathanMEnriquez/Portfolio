import React from 'react';
import contentJSON from '../json/content.json';
import '../css/Contact.css';

const Contact = ({ lang }) => {
    const name = contentJSON.main[lang || 'en'].name;
    const info = contentJSON.contact[lang || 'en'].info;

    return (
        <div className="contact">
            <div className="card">
                <header>
                    <div className="headshot">
                        HOLA
                    </div>
                    <div className="info">
                        <p>{name}</p>
                        <div className="addr">
                            <p>{info.address}</p>
                            <p><span>{info.city}</span>, <span>{info.state}</span> <span>{info.zip}</span></p>
                        </div>
                    </div>
                </header>
                <footer>
                    <div className="top"></div>
                    <div className="options">
                        <div></div>
                        <div></div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Contact;
