import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const like = props.liked ? '❤️' : '🤍';
  const toggleLike = () => {
    props.onUpdateLikeCount(props.id);
  };
  return (
    <div className="chat-entry local" id={props.id}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={toggleLike}>
          {like}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onUpdateLikeCount: PropTypes.func.isRequired,
};

export default ChatEntry;
