import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const source = props.sender === 'Vladimir' ? 'local' : 'remote';
  // let isLiked = props.liked;
  // let heart = 'no-heart';

  // const toggleLikeButton = () => {
  //   isLiked = !isLiked;
  //   if (isLiked) {
  //     heart = 'heart';
  //   } else {
  //     heart = 'no-heart';
  //   }
  // };
  const [liked, setLiked] = useState(props.liked);
  // const buttonClass = liked ? 'liked' : '';
  const toggleLikeButton = () => {
    const heart = document.getElementById(props.id);
    setLiked(!liked);
    if (liked) {
      heart.textContent = '🤍';
    } else {
      heart.textContent = '❤️';
    }
    setLiked(!liked);
  };

  console.log(props.id);

  return (
    <div className={`chat-entry ${source}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" id={props.id} onClick={toggleLikeButton}>
          🤍
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
};

export default ChatEntry;
