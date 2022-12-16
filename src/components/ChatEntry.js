import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const onLikeButtonClick = () => {
    const newChatData = {
      key: props.id,
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.updateChatLike(newChatData);
  };
  const heartSelector = props.liked ? '❤️' : '🤍';
  // const localOrRemote =
  //   props.sender === props.chatUserNames[0] ? 'local' : 'remote';
  const localOrRemote = props.id % 2 === 1 ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${localOrRemote}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        {/* <p className="entry-time">{props.timeStamp}</p> */}
        <div className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </div>
        <button className="like" onClick={onLikeButtonClick}>
          {heartSelector}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
};

export default ChatEntry;
