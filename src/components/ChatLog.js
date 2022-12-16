import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatEntry.css';
// import PropTypes from 'prop-types';

const ChatLog = ({ chatMessages }) => {
  const Vladimir = [];
  const Estragon = [];
  for (const message of chatMessages) {
    if (message.sender === 'Vladimir') {
      Vladimir.push(
        <ChatEntry
          key={message.id}
          id={message.id}
          body={message.body}
          sender={message.sender}
          liked={message.liked}
          timeStamp={message.timeStamp}
        />
      );
    } else {
      Estragon.push(
        <ChatEntry
          key={message.id}
          id={message.id}
          body={message.body}
          sender={message.sender}
          liked={message.liked}
          timeStamp={message.timeStamp}
        />
      );
    }
  }
  return (
    <section>
      <span>{Vladimir}</span>
      <span>{Estragon}</span>
    </section>
  );
};
ChatLog.propTypes = {
  Vladimir: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  Estragon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
};
export default ChatLog;
