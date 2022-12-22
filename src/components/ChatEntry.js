import React from 'react';
import './ChatEntry.css';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import Post from './Post.js';

const ChatEntry = (props) => {
  let flipHeart = () => {
    if (props.liked) {
      // props.liked = false;
      props.updateLikeCallback(-1);
    } else {
      // props.liked = true;
      props.updateLikeCallback(1);
    }
  };
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={flipHeart}>
          {props.liked ? '❤️' : '🤍'}
        </button>

        {/* <button className="like">🤍</button> */}
      </section>
      {/* <Post></Post> */}
      {/* <p className="top">{likeCount} 🤍's</p> */}
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  updateLikeCallback: PropTypes.func,
  liked: PropTypes.bool,
};

export default ChatEntry;
