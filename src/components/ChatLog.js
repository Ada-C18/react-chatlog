import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (entries) => {
  const getChatLogJSX = (entries) => {
    return entries.chatMessages.map((chat) => {
      return (
        <ChatEntry
          key={chat.id}
          id={chat.id}
          sender={chat.sender}
          body={chat.body}
          timeStamp={chat.timeStamp}
          liked={chat.liked}
          updateChatLike={entries.updateChatsLikes}
          chatUserNames={entries.userNames}
          timeStampComp={entries.timeStampComponent}
        />
      );
    });
  };
  return <ul className="chat-log">{getChatLogJSX(entries)}</ul>;
};

ChatLog.propTypes = {
  chatMessages: PropTypes.arrayOf(
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
