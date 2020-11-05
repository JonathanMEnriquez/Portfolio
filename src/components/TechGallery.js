import React from 'react';
import { Link } from 'react-router-dom';
import angular from '../images/technologies/angular.png';
import aws from '../images/technologies/aws.png';
import css from '../images/technologies/css.png';
import django from '../images/technologies/django.png';
import express from '../images/technologies/express.png';
import html from '../images/technologies/html.png';
import java from '../images/technologies/java.png';
import javascript from '../images/technologies/javascript.png';
import jquery from '../images/technologies/jquery.png';
import knockoutjs from '../images/technologies/knockoutjs.png';
import mongodb from '../images/technologies/mongodb.png';
import mysql from '../images/technologies/mysql.png';
import node from '../images/technologies/node.png';
import python from '../images/technologies/python.png';
import react from '../images/technologies/react.png';
import '../css/TechGallery.css';
import TechImage from './TechImage';

const images = [[javascript, 'Javascript'], [react, 'React'], [node, 'Node'], [express, 'Express'], [angular, 'Angular'], [knockoutjs, 'KnockoutJS'], [jquery, 'JQuery'],
                [python, 'Python'], [django, 'Django'],
                [html, 'HTML'], [css, 'CSS'],
                [java, 'Java'], [aws, 'AWS'], [mysql, 'MySQL'], [mongodb, 'MongoDB']];

const TechGallery = () => (
    <div className="gallery-container">
        <div className="tech-gallery">
            {images.map((en, k) => 
                <Link to={`/portfolio?tech=${en[1]}`} key={k} style={{cursor: 'pointer'}} >
                    <TechImage src={en[0]} alt={en[1]} />
                </Link>
            )}
        </div>
    </div>
)

export default TechGallery;
