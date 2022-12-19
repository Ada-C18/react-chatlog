import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  return (
    <div className="chat-log">
      {props.entries.map((entry, index) => {
        return (
          <ChatEntry
            key={index}
            chatPosition={index % 2 === 0 ? 'local' : 'remote'}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            id={entry.id}
            liked={entry.liked}
            toggleheart={props.toggleheart}
          />
        );
      })}
    </div>
  );
};
ChatLog.propTypes = {
  entries: PropTypes.array,
  toggleheart: PropTypes.func,
};

export default ChatLog;
