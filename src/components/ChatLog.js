import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entryComponents = props.entries.map((entry, index) => {
    return (
      <ul key={index}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          likeCount={entry.likeCount}
          likedState={entry.likedState}
          onLikeButton={entry.onLikeButton}
          liked={entry.liked}
        />
      </ul>
    );
  });

  return (
    <section className=".chat-log">
      <ul>{entryComponents}</ul>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      likeCount: PropTypes.number,
      likedState: PropTypes.string,
      liked: PropTypes.bool,
    })
  ).isRequired,
  onLikeButton: PropTypes.func,
};

export default ChatLog;
