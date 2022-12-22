import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = (props) => {
  const likedStatus = props.liked ? '❤️' : '🤍';
  const senderLocation = props.sender1 === props.sender ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${senderLocation}`}>
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
  sender1: PropTypes.string,
  sender2: PropTypes.string,
};

export default ChatEntry;
