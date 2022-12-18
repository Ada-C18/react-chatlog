import ChatEntry from './ChatEntry';
import './ChatEntry.css';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((chat) => {
    return (
      <ChatEntry
        key={chat.id}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
        updateLiked={props.updateLiked}
      ></ChatEntry>
    );
  });

  return <div>{chatComponents}</div>;
};

export default ChatLog;
