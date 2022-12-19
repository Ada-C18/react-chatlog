import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  return (
    <div className={`chat-entry ${props.chatPosition}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={() => props.toggleheart(props.id)} className="like">
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  chatPosition: PropTypes.string,
  sender: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
  liked: PropTypes.bool,
  timeStamp: PropTypes.string,
  toggleheart: PropTypes.func,
};

export default ChatEntry;
