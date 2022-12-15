import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  return (
    <div>
      {props.entries.map((entry) => {
        return (
          <ChatEntry
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
