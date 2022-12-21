import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  const onLikeButtonClick = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      // may be timestamp:props.timestamp or may need to bring that function below this one
      liked: !props.liked,
    };

    // Invoke the function passed in through the prop named "onUpdate"
    // This function is referenced by the name "updateMessageData" in App
    props.onUpdateMessage(updatedMessage.id);
  };

  // this is a ternary
  const heartColor = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button
          className="like"
          onClick={onLikeButtonClick}
          // props.onUpdateMessage(props.id, !props.liked)}
        >
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timestamp: PropTypes.string,
  liked: PropTypes.bool,
  onUpdateMessage: PropTypes.func,
};

export default ChatEntry;
