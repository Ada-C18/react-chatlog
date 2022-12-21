import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [heart, heartState] = useState('🤍');
  const heartColorChange = () => {
    if (heart === '🤍') {
      heartState('❤️');
      props.heartChange=true;
    }else {
      heartState('🤍');
      props.heartChange=false;
    } 
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        {/* <p className="entry-time">{props.timeStamp}</p> */}
        <TimeStamp className="entry-time" time={props.timeStamp} />
        {/* <button className="like">🤍</button> */}
        {/* adding behavior to button ChatEntry */}
        <button onclick={heartColorChange} className="like">
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  heartChange: PropTypes.bool.isRequired,
};

export default ChatEntry;
