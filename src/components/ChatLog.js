import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';
import './ChatEntry.css';

const ChatLog = (props) => {
  const entries = props.entries;

  return (
    <div className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
