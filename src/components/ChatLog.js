import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  console.log(props);
  const chatComponents = props.entries.map((chatMessage) => {
    return (
      <li key={chatMessage.id}>
        <ChatEntry
          id={chatMessage.id}
          sender={chatMessage.sender}
          body={chatMessage.body}
          timeStamp={chatMessage.timeStamp}
          liked={chatMessage.liked}
          onUpdate={props.onMessageUpdate}
        />
      </li>
    );
  });

  return (
    <section>
      <ul>{chatComponents}</ul>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMessageUpdate: PropTypes.func.isRequired,
};

export default ChatLog;
