import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const flipHeart = () => {
    props.toggleHeartCallback(props.id);
  };

  return (
    <div
      className={`chat-entry ${
        props.sender === 'Estragon' ? 'remote' : 'local'
      } `}
    >
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={flipHeart}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  toggleHeartCallback: PropTypes.func,
};

ChatEntry.defaultProps = {
  toggleHeartCallback: () => {},
};

export default ChatEntry;
