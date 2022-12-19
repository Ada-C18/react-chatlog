import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
// import chatMessages from './data/messages.json';

const ChatLog = ({ entries, firstSender, onLike }) => {
  // if (entries.length === 0) {
  //   const chatLog = entries;
  //   return <section key="emptyLog">{chatLog}</section>;
  // }

  const chatLog = entries.map((message) => {
    return (
      <div key={message.id}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          firstSender={firstSender}
          liked={message.liked}
          onLike={onLike}
        ></ChatEntry>
      </div>
    );
  });

  return <section>{chatLog}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  firstSender: PropTypes.string.isRequired,
  onLike: PropTypes.func.isRequired,
};
export default ChatLog;
