import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import chatMessages from '../data/messages.json';

const ChatEntry = (props) => {
  const onHeartButtonToggle = () => {
    console.log('Button toggled');
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };

    props.onUpdate(updatedMessage);
  };

  const heartSymbol = props.liked ? '❤️' : '🤍';

  const localRemote =
    props.sender === chatMessages[0].sender
      ? 'chat-entry local'
      : 'chat-entry remote';

  return (
    <div className={localRemote}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={onHeartButtonToggle}>
          {heartSymbol}
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
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
