import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, setToggleLike }) => {
  const chatComponents = entries.map((message, id) => {
    return (
      <ul key={id}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          setToggleLike={setToggleLike}
        />
      </ul>
    );
  });

  return <section>{chatComponents}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
  setToggleLike: PropTypes.func,
};

export default ChatLog;
