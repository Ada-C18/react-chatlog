import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const chatAlign = (props) => {
    if (props.sender === 'Vladimir') {
      return 'chat-entry local';
    } else if (props.sender === 'Estragon') {
      return 'chat-entry remote';
    }
  };

  // const onLikeButtonClicked = () => {
  //   const updatedEntry = {
  //     id: props.id,
  //     sender: props.sender,
  //     body: props.body,
  //     timeStamp: props.timeStamp,
  //     liked: !props.liked
  //   };
  //   props.onUpdate(updatedEntry)
  // };

  const heart = props.liked ? '❤️': '🤍';

  return (
    <div className={chatAlign(props)}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}/>
        </p>
        <button className="like" onClick={() => props.onClickLike(props.id)}>{heart}</button>
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
