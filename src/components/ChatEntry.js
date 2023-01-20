import React, { useState } from 'react';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {

  const [isMessageLiked, setIsMessageLiked] = useState(false)


  const toggleLikeButton = (event) => {
    const updatedChatEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked
    }
    setIsMessageLiked(!isMessageLiked);
    props.onHandleLikes(updatedChatEntry);
    };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button className="like" onClick={toggleLikeButton}>
        {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  onHandleLikes: PropTypes.func
};

export default ChatEntry;