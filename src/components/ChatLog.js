import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    return (
        <div className='chat-log'>
            <p>{props.entries}</p>
        </div>
    )
}

ChatLog.propTypes = {
    entries: PropTypes.array
}