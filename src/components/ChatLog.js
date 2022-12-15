import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';



const ChatLog = ({entries}) => {

  
    const messageComponents = entries.map((message) => {
        return (
          <div key={message.id}>
          <ChatEntry 
          sender={message.sender} 
          body={message.body} 
          timeStamp={message.timeStamp} 
          liked={message.liked}             
          />
          </div>
        );
      });
   
    return (<div className="chat-log">
    {messageComponents}
    </div>);

};

ChatLog.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked:PropTypes.bool.isRequired,
};
export default ChatLog;