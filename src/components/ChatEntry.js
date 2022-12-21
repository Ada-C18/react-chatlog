import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';
// import { useState } from 'react';

const ChatEntry = (props) => {
  // const [isLiked, setIsLiked] = useState(false);

  // const toggleLiked = () => {
  //   console.log('I have clicked on a heart!');
  //   setIsLiked(!isLiked);
  // };

  const onLikeClick = () => {
    console.log('I clicked a heart!');
    const updatedChat = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdate(updatedChat);
  };

  const heartStatus = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>

        <p>
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={onLikeClick} className="heart-liked">
          {heartStatus}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onupdate: PropTypes.func.isRequired,
};

export default ChatEntry;
