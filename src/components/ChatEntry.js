import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  console.log('this is props in ChatEntry', props)
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.entry.sender}</h2>
      <section className="entry-bubble">
        <p>{props.entry.body}</p>
        <p>{props.entry.timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  entry: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string,
    body: PropTypes.string,
    timeStamp: PropTypes.string
  }))
};

export default ChatEntry;