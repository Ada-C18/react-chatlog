import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const changeLike = () => {
    const clickedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked, // CHANGE
    };
    props.onLike(clickedMessage);
  };

  const localOrRemote = props.id % 2 ? 'local' : 'remote';
  const likedOrNotLiked = props.liked ? '❤️' : '🤍';

  return (
    <div className={`chat-entry ${localOrRemote}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button onClick={changeLike} className="like">
          {likedOrNotLiked}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onLike: PropTypes.func.isRequired,
};

export default ChatEntry;
