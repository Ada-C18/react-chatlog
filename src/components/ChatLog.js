import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';



const ChatLog = (props) => {
  
  return (
    props.entries.map((message) => (
        <ChatEntry 
        sender={message.sender} 
        body={message.body} 
        timeStamp={message.timeStamp}
        id={message.id}
        liked={message.liked}
        key={message.id}
        onlikeChat = {props.onlikeChat}
       
        ></ChatEntry>  
        
    )));
};
    
ChatLog.propTypes = {
    chatMessages: PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool
    })),
  onlikeChat: PropTypes.func.isRequired,

 
  };



export default ChatLog;