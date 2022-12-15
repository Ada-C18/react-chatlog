import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({
  sender,
  body,
  timeStamp,
  id,
  liked,
  onUpdateChatMessages,
}) => {
  const updateChat = () => {
    onUpdateChatMessages({
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked,
    });
  };

  let localRemote =
    sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={localRemote}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeStamp}</p>
        <button className="like" onClick={updateChat}>
          🤍
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdateChatMessages: PropTypes.func.isRequired,
};

export default ChatEntry;
