import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryData = props.chatEntryData.map((chatEntry) => {
    return (
      <ChatEntry
        id={chatEntry.id}
        key={chatEntry.id}
        sender={chatEntry.sender}
        body={chatEntry.body}
        timeStamp={chatEntry.timeStamp}
        liked={props.liked}
        onHeartToggle={props.onHeartToggle}
      />
    );
  });
  return <div className="chat-log">{chatEntryData}</div>;
};

ChatLog.propTypes = {
  chatEntryData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ),
};

export default ChatLog;
