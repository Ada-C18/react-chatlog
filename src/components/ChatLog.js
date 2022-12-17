import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  return (
    <div className="chat-log">
      {props.entries.map((entry, index) => {
        return (
          <ChatEntry
            chatPosition={index % 2 === 0 ? 'local' : 'remote'}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
          />
        );
      })}
    </div>
  );
};

export default ChatLog;
