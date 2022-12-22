import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const id = props.id;
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  const liked = props.liked;
  const updateLiked = props.updateLiked;
  const display = sender === 'Vladimir' ? 'local' : 'remote';
  const heart = liked === true ? '❤️' : '🤍';
  const updateColor = props.updateColor;
  const color = updateColor;

  const handleLiked = () => {
    console.log('handleLiked called');
    updateLiked(id);
  };

  return (
    <div className={`chat-entry ${display}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={handleLiked}>
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  updateLiked: PropTypes.func,
  updateColor: PropTypes.func,
};

export default ChatEntry;
