import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, updateLiked}) => {

  const chatEntryClass = sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';
  const like = liked === 'false' ? '🤍' : '❤️';

    return (
      <div className={chatEntryClass}>
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time"><TimeStamp time={ timeStamp }/></p>
          <button className={like} onClick={() => updateLiked(id)}>🤍</button>
        </section>
      </div>
    );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked:PropTypes.bool
};

export default ChatEntry;
