import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { DateTime } from 'luxon';

const ChatEntry = ({id,sender,body,timeStamp,liked}) => {

  // //solution 1 based on sender
  // let changePos = 'chat-entry local';
  // if (sender==='Vladimir') {
  //   changePos = 'chat-entry remote';
  // }

  //solution 2 using ternary function to toogle left and right
  // const changePos = (sender==='Vladimir') ? 'local':'remote'}

  return (
    <div className={`chat-entry ${sender==='Vladimir' ? 'local':'remote'}`}>     
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p >{body}</p>
        <p className="entry-time">
        <TimeStamp time={timeStamp} />
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked:PropTypes.bool.isRequired,
};

export default ChatEntry;
