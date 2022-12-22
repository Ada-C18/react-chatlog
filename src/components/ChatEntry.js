import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';


const ChatEntry = (props) => {

  const likeMessage = () => {
    const updatedEntry = {
      ...props,
      liked: !props.liked
    }
    props.onLike(updatedEntry)
  }

  return (
    <div className={`chat-entry ${props.remoteSend ? 'remote':'local'}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={() => likeMessage()}>{props.liked ? '❤️':'🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  onLike: PropTypes.func,
  remoteSend: PropTypes.bool
};

export default ChatEntry;
