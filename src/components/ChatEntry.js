import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const yearsAgo = (string) => {
  const yearsAgo = 2022 - parseInt(string.slice(0, 4), 10);
  return yearsAgo;
};

const ChatEntry = (props) => {
  const onLikeButton = () => {
    const updatedEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked
    };
    props.onLike(updatedEntry);
  };
  
  const likeHeart = props.liked ? '❤️' : '🤍';
  const placement = props.sender === 'Vladimir' ? 'local' : 'remote'

  return (
    <div className={`chat-entry ${placement}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          {yearsAgo(props.timeStamp)} {'years ago'}
        </p>
        <button className='like' onClick={onLikeButton}>{likeHeart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onLike: PropTypes.func.isRequired,
};

export default ChatEntry;
