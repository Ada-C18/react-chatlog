import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

// const likeButton = document.getElementsByClassName('liked');

const ChatEntry = (props) => {
  const heartBasedOnLiked = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <TimeStamp time={props.timeStamp} />
        <button className="like" onClick={() => props.onHeartClick(props.id)}>
          {heartBasedOnLiked}
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
  onHeartClick: PropTypes.func.isRequired,
};

export default ChatEntry;
