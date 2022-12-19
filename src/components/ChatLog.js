import react from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  return (
    <ul className="chat-entry local">
      {props.entries.map((message) => {
        return (
          <ChatEntry
            key={message.id}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            liked={message.liked}
          />
        );
      })}
    </ul>
  );
};

ChatLog.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
};

export default ChatLog;
