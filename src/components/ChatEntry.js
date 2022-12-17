import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;

  const yearsAgo = yearconvert(timeStamp);
  const timeStampStr = `${yearsAgo} years ago`;

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeStampStr}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

const yearconvert = (timeStamp) => {
  const today = new Date();
  const ddToday = today.getDate();
  const mmToday = today.getMonth() + 1;
  const yyyyToday = today.getFullYear();
  const yeardate = timeStamp.split('-');
  const yyyy = parseInt(yeardate[0]);
  const mm = parseInt(yeardate[1]);
  const datetime = yeardate[2].split('T');
  const dd = parseInt(datetime[0]);
  let yearsAgo = yyyyToday - yyyy;
  if (mmToday - mm < 0) {
    // when the month is earlier than current month, it's not full years
    yearsAgo = yearsAgo - 1;
  } else if (mmToday - mm === 0) {
    if (ddToday - dd < 0) {
      yearsAgo = yearsAgo - 1;
    }
  }
  return yearsAgo;
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  //Fill with correct proptypes
};

export default ChatEntry;
