import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
// import chatMessages from './data/messages.json';

const ChatLog = (props) => {
  return (
    <>
      <ul>
        {props.entries.map((chat) => (
          <ChatEntry className='chat-log'
            sender={chat.sender}
            body={chat.body}
            timeStamp={chat.timeStamp}
            key={chat.id}
            liked={chat.liked}
            id={chat.id}
            onLike={props.onUpdateEntry}
          />
        ))} 
      </ul>
    </>
  );
};

ChatLog.propTypes = {
  chatLog: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
      onLike: PropTypes.func.isRequired,
    })),
    onUpdateEntry: PropTypes.func.isRequired,
};

export default ChatLog;
