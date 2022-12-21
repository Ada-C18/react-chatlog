import propTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, updateLikes }) => {
  const chatList = [];
  for (const entry of entries) {
    chatList.push(
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        updateLikes={updateLikes}
      />
    );
  }
  return <div className="chat-log">{chatList}</div>;
};

ChatLog.propTypes = {
  entries: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      sender: propTypes.string.isRequired,
      body: propTypes.string.isRequired,
      timeStamp: propTypes.string.isRequired,
      liked: propTypes.bool.isRequired,
    })
  ),
};
export default ChatLog;
