import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const onLikeButtonClick = () => {
    const updatedChatEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdateChatData(updatedChatEntry);
  };

  const heart = props.liked ? '❤️' : '🤍';

  let chatStyle = 'chat-entry local'
  if (props.id %2 !== 0) {
    chatStyle = 'chat-entry remote'
  }

  return (
    <div className={chatStyle}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        {/* <p>{props.id}</p> */}
        <p>{props.body}</p>
        <p className="entry-time">
        <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={onLikeButtonClick}>{heart}</button>
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
};

export default ChatEntry;
