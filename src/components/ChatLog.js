import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((entry) => {
    return (
      <li key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLike={props.onLikeMessage}
        ></ChatEntry>
      </li>
    );
  });
  return (
    <section>
      <ul>{chatEntryComponents}</ul>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
  onLikeMessage: PropTypes.func.isRequired,
};

export default ChatLog;
