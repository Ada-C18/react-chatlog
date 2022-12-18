import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  // const onLikeButtonClick = () => {
  //   const updatedEntry = {
  //     id: props.id,
  //     sender: props.sender,
  //     body: props.body,
  //     timeStamp: props.timeStamp,
  //     liked: !props.liked,
  //   };
  //   props.onUpdateLikedEntry(updatedEntry);
  // };

  const heartColor = props.liked ? '❤️' : '🤍';

  // const heartColor = '❤️';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button
          className="like"
          onClick={() => props.onUpdateLikedEntry(props.id)}
        >
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdateLikedEntry: PropTypes.func.isRequired,
};

export default ChatEntry;
