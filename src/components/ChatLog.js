import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
// import './ChatLog.css';

const ChatLog = (props) => {
  // We are getting access on the props object.
  // Accessing entries (which is an array of chat messages)
  // On that array of data objects, we're using map() fx
  // to reference each chat object in that array.
  // Then, we have a chatComponent for each instance in the entries array
  const chatComponents = props.entries.map((chat, i) => {
    return (
      <ChatEntry
        key={i}
        id={chat.id}
        sender={chat.sender} // We are iterating through each chat message
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
      />
    );
  });

  return <div>{chatComponents}</div>;
};

ChatEntry.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool,
    })
  ),
};

export default ChatLog;
