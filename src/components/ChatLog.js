import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
// import TimeStamp from './TimeStamp';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, updateLike }) => {
  const chatComponents = entries.map((message) => {
    return (
      <div key={message.id} className="chat-entry local">
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          like={message.liked}
          updateLike={updateLike}
        />
      </div>
    );
  });

  return (
    <section>
      <div>{chatComponents}</div>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  updateLike: PropTypes.func.isRequired,
};

export default ChatLog;
