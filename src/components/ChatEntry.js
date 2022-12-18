import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const yearsAgo = (string) => {
  const yearsAgo = 2022 - parseInt(string.slice(0, 4), 10);
  return yearsAgo;
};

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          {yearsAgo(props.timeStamp)} {'years ago'}
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
