import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const chat = {
    id: props.id,
    sender: props.sender,
    body: props.body,
    timeStamp: props.timeStamp,
    liked: props.liked,
    onLike: props.onLike
    };

  let sender;
  if (props.sender === 'Vladimir') {
    sender = 'chat-entry local';
  } else {
    sender = 'chat-entry remote';
  };

  const onLikeButtonClick = () => {
    const updatedChat = {
        id: props.id,
        sender: props.sender,
        body: props.body,
        timeStamp: props.timeStamp,
        liked: !props.liked,
        onLike: props.onLike
      };
    props.onLike(updatedChat);
    console.log('button clicked!');
    }
  
  
  const heartColor = props.liked ? '❤' : '🤍';
  

  return (
    <div className={sender}>
      <h2 className="entry-name">{chat.sender}</h2>
      <section className="entry-bubble">
        <p>{chat.body}</p>
        <p className="entry-time"><TimeStamp time = {chat.timeStamp}></TimeStamp></p>
        <button className="like" onClick = {onLikeButtonClick}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired
};

export default ChatEntry;
