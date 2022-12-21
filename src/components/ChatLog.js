import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, updateLikes }) => {
  // const updateLikes = updateLikes;

  const messageComponents = entries.map((message) => {
    return (
      <div key={message.id}>           
        <ChatEntry                     
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          updateLikes={updateLikes}
        />
      </div>
    );
  });

  return <div className="chat-log">{messageComponents}</div>;
};

ChatLog.propTypes = {
  //Fill with correct
  messageList: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  updateLikes: PropTypes.func.isRequired
};

export default ChatLog;
