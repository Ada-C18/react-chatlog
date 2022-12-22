import React from 'react';
import './ChatLog.css';
import './ChatEntry.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatlist = [];
  const chatData = props.entries;
  const changeLike = props.changeLike;

  for (const chat of chatData) {
    chatlist.push(
      <ChatEntry
        key={chat.id}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
        changeLike={changeLike}
      />
    );
  }
  return <div>{chatlist}</div>;
};

ChatLog.propTypes = {
  chatData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  changeLike: PropTypes.func.isRequired,
};

export default ChatLog;
