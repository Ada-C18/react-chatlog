import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';



const ChatLog = ({chatMessages}) => {

  
    const messageComponents = chatMessages.map((message) => {
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


export default ChatLog;