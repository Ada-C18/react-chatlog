import ChatEntry from './ChatEntry';
import './ChatEntry.css';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((chat, i) => {
    return (
      <div key={i}>
        <ChatEntry
          sender={chat.sender}
          body={chat.body}
          timeStamp={chat.timeStamp}
        ></ChatEntry>
      </div>
    );
  });

  return <div>{chatComponents}</div>;
};

export default ChatLog;
