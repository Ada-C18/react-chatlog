import React from 'react';
import PropTypes from 'prop-types';

import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = ({
  id,
  sender,
  body,
  timeStamp,
  liked,
  onUpdateMessages,
  incrementCount,
  decreaseCount,
}) => {
  const entryTime = TimeStamp(timeStamp);

  let align = '';
  if (id % 2 === 0) {
    align = 'chat-entry remote';
  } else {
    align = 'chat-entry local';
  }

  const updateEmojiOnClick = () => {
    const newMessage = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked,
    };

    if (newMessage.liked) {
      incrementCount();
    } else {
      decreaseCount();
    }

    onUpdateMessages(newMessage);
  };

  const updatedEmoji = liked ? '❤️' : '🤍';

  return (
    <div key={id} className={align}>
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble">
        <p>{body}</p>

        <p className="entry-time">{entryTime}</p>

        <button className="like" onClick={updateEmojiOnClick}>
          {updatedEmoji}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onUpdateMessages: PropTypes.func,
  incrementCount: PropTypes.func,
  decreaseCount: PropTypes.func,
};

export default ChatEntry;
