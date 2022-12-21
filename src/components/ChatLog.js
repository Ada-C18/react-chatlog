import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (entries) => {
  return <h2>Student List</h2>;
  // <ul>
  //   <li>{sender=entries}</li>
  //   <li>sender:en</li>
  //   <li>body:Hey</li>
  //   <li>timeStamp:2018-05-29T22:49:06+00:00</li>
  // </ul>
  // );
};

ChatLog.propTypes = {
  entries: PropTypes.array,
};
export default ChatLog;
