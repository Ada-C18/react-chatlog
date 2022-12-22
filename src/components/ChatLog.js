import React from 'react';
import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry) => (
    <ChatEntry
      key={entry.id}
      id={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      toggleLiked={props.onToggleLiked}
      localColor={props.colors.local}
      remoteColor={props.colors.remote}
    />
  ));

  return <section className="chat-log">{chatComponents}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool,
    })
  ),
  onToggleLiked: PropTypes.func,
  colors: PropTypes.shape({
    local: PropTypes.string,
    remote: PropTypes.string,
  }),
};

export default ChatLog;
