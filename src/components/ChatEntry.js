import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const time = <TimeStamp timeStamp={props.timeStamp} />;
  const nameLocalRemote = props.sender === 'Vladimir' ? 'local' : 'remote';

  const classes = `chat-entry ${nameLocalRemote}`;

  // Source: https://stackoverflow.com/questions/34521797/how-to-add-multiple-classes-to-a-reactjs-component

  return (
    <div className={classes}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{time}</p>
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
