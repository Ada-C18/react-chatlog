import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const likedStatus = props.liked ? '❤️' : '🤍';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={() => props.updateChat(props.id)}>
          {likedStatus}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  id: PropTypes.number,
  liked: PropTypes.bool,
  updateChat: PropTypes.func,
};

export default ChatEntry;
