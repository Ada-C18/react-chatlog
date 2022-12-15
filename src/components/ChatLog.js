import React from 'react';
//import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <section>
      {/* <ChatEntry chatMessageData={props.chatMesssagesData}></ChatEntry> */}
      <div>{props.chatMessagesData}</div>
    </section>
  );
};

export default ChatLog;
