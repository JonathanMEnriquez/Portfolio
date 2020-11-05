import React, {createRef} from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Button from './Button';
import contentJSON from '../json/content.json';
import '../css/Portfolio.css';
import PortfolioVideo from './PortfolioVideo';
import { displayTitle, matchPortfolioContent, processRelatedTerms } from '../helpers/contentHelpers';
import Search from './Search';
import TechGallery from './TechGallery';

const Portfolio = ({ lang, windowListener }) => {
    const headerRef = createRef();
    const history = useHistory();
    const mainText = contentJSON.main[lang || 'en'];
    const location = useLocation();
    const content = matchPortfolioContent(location && new URLSearchParams(location.search).get('tech'), lang || 'en');
    const relatedTerms = processRelatedTerms(content.related);
    const techTitle = displayTitle(content);

    return (
        <div className="portfolio">
            <div className="header" ref={headerRef}>
                <div className="header-info">
                    <Button content={<Link to="/contact" >{mainText.contact}</Link>} callback={null} />
                </div>
                <PortfolioVideo headerRef={headerRef} windowListener={windowListener} />
            </div>
            <div className="portfolio-content">
                <section className="technology-detail">
                    <div className="section-header">
                        <span>{techTitle}</span>
                    </div>
                    <div className="section-body">
                        {content.experience &&
                            <p><span>Professional Experience: </span><span>{content.experience}</span></p>
                        }
                        <p className="description">{content.description}</p>
                        {content.total && 
                            <p className="exp-total">{`Total professional projects with ${techTitle}: ${content.total}`}</p>
                        }
                        {content.other &&
                            <p className="exp-total">{`Other experience: ${content.other}`}</p>
                        }
                    </div>
                    <div className="section-related">
                        <p>
                            <span>{relatedTerms.length ? 'Related Tech:' : ''}</span>
                            <span>
                                {relatedTerms.map((term, key) => (
                                    <span key={key}><Link to={`portfolio?tech=${term}`}>{term[0].toUpperCase() + term.slice(1)}</Link>{ key !== relatedTerms.length - 1 ? ', ' : '' }</span>
                                ))}
                            </span>
                        </p>
                    </div>
                </section>
                <section className="technology-gallery">
                    <Search lang={lang} history={history} content={content} />
                    <TechGallery />
                </section>
            </div>
        </div>
    );
}

export default Portfolio;