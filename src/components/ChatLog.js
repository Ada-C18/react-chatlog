import propTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, updateLike }) => {
  const chatList = [];
  for (const entry of entries) {
    chatList.push(
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        updateLike={updateLike}
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
  updateLike: propTypes.func.isRequired,
};
export default ChatLog;
