import React, {useState, createRef} from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import '../css/Search.css';
import { findPossibleMatches } from '../helpers/contentHelpers';

const resultsVariants = {
    visible: { 
        opacity: [0, 0, 0.25, 0.4, 1.0], 
        visibility: 'visible', 
        y: 0, 
        transition: { duration: 0.2 } 
    },
    hidden: { 
        opacity: 0, 
        visibility: 'hidden', 
        y: -40 
    },
};

const Search = ({ lang, history, content }) => {
    const [matches, setMatches] = useState([]);
    const [selected, setSelected] = useState(null);
    const inputRef = createRef();

    const clear = () => {
        setMatches([]);
        setSelected(null);
        inputRef.current.value = '';
    };

    const changeHandler = e => {
        setSelected(null);
        setMatches(findPossibleMatches(e.target.value, lang, content.header));
    };

    const keyPressHandler = e => {
        if (!matches.length) return;

        if (e.key === 'ArrowDown') {
            if (selected === null) {
                setSelected(0);
            } else {
                setSelected(selected < matches.length - 1 ? selected + 1 : null);
            }
        } else if (e.key === 'ArrowUp') {
            if (selected === null) {
                setSelected(matches.length - 1);
            } else {
                setSelected(selected > 0 ? selected - 1 : null);
            }
        } else if (e.key === 'Enter') {
            let term;
            if (selected !== null) {
                term = matches[selected].term;
            } else {
                term = inputRef.current.value;
            }

            history.push(`/portfolio?tech=${term}`);
            clear();
        }
    };

    return (
        <div className="search">
            <div className="search-container">
                <input type="text" 
                    onKeyDown={keyPressHandler}
                    onChange={changeHandler}
                    ref={inputRef} />
                <span></span>
            </div>
            {matches.length > 0 &&
                <motion.div className={matches.length ? "search-results" : ''}
                    variants={resultsVariants}
                    initial="hidden"
                    animate="visible" >
                    {matches.map((m, k) => 
                        <Link to={`/portfolio?tech=${m.term}`}
                            key={k}
                            onClick={clear}
                            className={selected === k ? 'selected' : ''} >
                        {m.display || m.term}
                        </Link>
                    )}
                </motion.div>
            }
        </div>
    )
}

export default Search;
