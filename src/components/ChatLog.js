import ChatEntry from './ChatEntry';
// import PropTypes from 'prop-types';
// import './ChatLog.css';

const ChatLog = (props) => {
  // We are getting access on the props object.
  // Accessing data (which is an array of chat messages)
  // On that array of data objects, we're using map() fx
  // to reference each chat object in that array.
  // Then, we a chatComponent for each instance in the data array
  const chatComponents = props.data.map((chat) => {
    return (
      <ChatEntry
        sender={chat.sender} // We are iterating through each chat message
        body={chat.body}
        timeStamp={chat.timeStamp}
      />
    );
  });

  return <div>{chatComponents}</div>;
};

export default ChatLog;
