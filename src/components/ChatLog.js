import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (entries) => {
  console.log(entries);
  return (
    <ul>
      <li>sender:Jess</li>
      <li>body:Hey</li>
      <li>timeStamp:2018-05-29T22:49:06+00:00</li>
    </ul>
  );
};

ChatLog.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ChatLog;
