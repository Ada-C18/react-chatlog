import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const getChatLogJSX = (props) => {
    return props.entries.map((entry) => {
      return (
        <ChatEntry
          // key={entry.id}
          // id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          id={entry.id}
          liked={entry.liked}
          updateLike = {props.updateLike}

          // isComplete={entry.isComplete}
          // updateTask={props.updateTask}
        />
      );
    });
  };
  
  return (
    <ul> {getChatLogJSX(props)} </ul>
  )
}
export default ChatLog;
