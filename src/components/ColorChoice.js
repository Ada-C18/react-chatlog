import React from "react";
import PropTypes from 'prop-types';
import './ColorChoice.css';

const ColorChoice = (props) => {

    return (
        <div className="buttonClass">
            <button className="red"></button>
            <button className="orange"></button>
            <button className="yellow"></button>
            <button className="green"></button>
            <button className="blue"></button>
            <button className="purple"></button>
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
