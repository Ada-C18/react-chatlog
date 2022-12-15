import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const messageData = [
  {
    id: 1,
    sender:'Vladimir',
    body:'why are you arguing with me',
    timeStamp:'2018-05-29T22:49:06+00:00',
    liked: false
  },
  {
  id: 2,
    sender:'Estragon',
    body:'Because you are wrong.',
    timeStamp:'2018-05-29T22:49:33+00:00',
    liked: false
  },

]

const ChatLog = () => {

  
    const messageComponents = messageData.map((message) => {
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