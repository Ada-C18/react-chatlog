import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


function Chatlog(props) {
  const ChatEntryComponenet= props.entries.map(({id, sender, body, timeStamp}) =>{
    return (
      <ChatEntry 
      key = {id}
      id = {id}
      sender ={sender}
      body ={body}
      timeStamp = {timeStamp}
      />
    );

  });
  return (
    <div>{ChatEntryComponenet}</div>
  )
}
ChatEntry.propTypes ={
  entries: PropTypes.array.isRequired,
};

export default Chatlog