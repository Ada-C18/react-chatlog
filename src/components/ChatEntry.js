import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const heartButton = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button
          className="like"
          onClick={() => {
            props.onToggleHeart(props.id);
          }}
        >
          {heartButton}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onToggleHeart: PropTypes.func,
};

export default ChatEntry;
