import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({sender, body, timeStamp}) => {
  const chatComponents = []
  const newDate = new Date()
  console.log(new Date(timeStamp))
  let diff = (newDate.getTime() - new Date(timeStamp).getTime()) / 1000;
  diff /= (60*60*24);
  let currentYears = Math.abs(Math.round(diff/365.25))
  
  chatComponents.push(
    <li>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{currentYears} years ago</p>
        <button className="like">🤍</button>
      </section>
    </li>
    )
  return (
    <div className="chat-entry local">
      {chatComponents}
    </div>
  );
};

ChatEntry.propTypes = {
  chatEntry: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired
    })
  )
};

export default ChatEntry;
