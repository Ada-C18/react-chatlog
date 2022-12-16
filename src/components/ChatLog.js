import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const getChatLogJSX = (props) => {
    return props.entries.map((chat) => {
      return (
        <ChatEntry
          key={chat.id}
          id={chat.id}
          sender={chat.sender}
          body={chat.body}
          timeStamp={chat.timeStamp}
          liked={chat.liked}
          updateChatLike={props.updateChatsLikes}
          chatUserNames={props.userNames}
          timeStampComp={props.timeStampComponent}
        />
      );
    });
  };
  return <ul className="chat-log">{getChatLogJSX(props)}</ul>;
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
  updateChatsLikes: PropTypes.func,
};

export default ChatLog;
