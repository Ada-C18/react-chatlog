import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  return (
    <div>
      <section>
        {props.entries.map((entrie) => (
          <ChatEntry
            key={entrie.id}
            id={entrie.id}
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
