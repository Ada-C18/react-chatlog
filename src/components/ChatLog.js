import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <div>
      {props.entries.map((text) => (
        <ChatEntry
          id={text.id}
          sender={text.sender}
          body={text.body}
          timeStamp={text.timeStamp}
          liked={text.liked}
          onLiked={props.onLiked}
        />
      ))}
    </div>
  );
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
  onLiked: PropTypes.func.isRequired,
};

export default ChatLog;
