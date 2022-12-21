import { useState } from 'react';
import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const id = props.id;
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  // const liked = props.liked;
  const updateLikes = props.updateLikes;

  const [likeStatus, setlikeStatus] = useState(false);
  
  let locationClass = sender === 'Vladimir' ? 'local' : 'remote';
  let heartToggles = likeStatus === true ? '❤️' : '🤍';

  function changeLike(likeStatus) {
    console.log('likeStatus', likeStatus);
    
    updateLikes(id, likeStatus);
    setlikeStatus(!likeStatus);
  }

  return (
    <div className={`chat-entry ${locationClass}`} id={id}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button
          onClick={() => {
            changeLike(likeStatus);
          }}
          className="like"
        >
          {heartToggles}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  ChatEntry: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  updateLikes: PropTypes.func.isRequired,
};

export default ChatEntry;
