import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const getChatLog = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        time={entry.timeStamp}
        liked={entry.liked}
        likeCount={entry.likeCount}
        onLikeMessage={props.onLikeMessage}
      />
    );
  });
  return <section>{getChatLog}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      likeCount: PropTypes.number.isRequired,
    })
  ),
  onLikeMessage: PropTypes.func.isRequired,
};

export default ChatLog;
