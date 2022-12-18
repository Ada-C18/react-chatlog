import ChatEntry from './ChatEntry';
import './ChatEntry.css';

const ChatLog = (props) => {
  console.log(props.entries);
  // console.log(`😘 ${props.updateLiked}`);
  const chatComponents = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        updateLiked={props.updateLiked}
      ></ChatEntry>
    );
  });
  return <div>{chatComponents}</div>;
};

export default ChatLog;
