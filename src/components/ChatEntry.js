import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  let isLocal = 'local';
  if (props.sender !== 'Vladimir'){
    isLocal = 'remote';
  }

  return (
    <div className={`chat-entry ${isLocal}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
            <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};


ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
