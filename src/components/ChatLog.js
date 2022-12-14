import React from 'react';
import ChatEntry from './components/ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  // const testMessageSender = chatMessages;
  // const testMessageBody = chatMessages;
  // const testMessageTimeStamp = chatMessages;
  return (
    <div>
      <section>
        {props.entries.map((entrie) => (
          <ChatEntry
            sender={entrie.sender}
            body={entrie.body}
            timeStamp={entrie.timeStamp}
          ></ChatEntry>
        ))}
      </section>
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
