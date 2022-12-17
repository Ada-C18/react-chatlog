import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  let isLocal = 'local';
  if (props.sender !== 'Vladimir'){
    isLocal = 'remote';
  }

  const toggleLike = () => {
    const updatedMessage = {
      sender: props.sender,
      id: props.id,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onToggleLike(updatedMessage);
  }


  const heart = props.liked ? '❤️' : '🤍';

  return (
    <div className={`chat-entry ${isLocal}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
            <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button onClick={toggleLike} className="like">{heart}</button>
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
  onToggleLike : PropTypes.func.isRequired,
};

export default ChatEntry;
