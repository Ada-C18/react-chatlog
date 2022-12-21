import React from "react";
import PropTypes from 'prop-types';
import './ColorChoice.css';

const ColorChoice = (props) => {
    
    let person = null;
    if (props.id !== id) {
    person = props.sender;
    }

    return (
        <div>
            <h2>{person} color</h2>
            <button>x</button>
        </div>
    )
}

ColorChoice.propTypes = {
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  };

export default ColorChoice;

// send in props from app
// create function inside of app to send callback to colorchoice to determine what color to make sender
// send name of sender to colorchoice or send color
