import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.name}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.time}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.tim
};

export default ChatEntry;
