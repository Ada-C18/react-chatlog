import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, updateLiked}) => {
  const chatComponents = entries.map((chat) => {
    return (
      <section key={chat.id}>
        <ChatEntry
        id = {chat.id}
        sender = {chat.sender}
        body = {chat.body}
        timeStamp = {chat.timeStamp}
        liked = {chat.liked}
        updateLiked = {updateLiked}>
        </ChatEntry>
      </section>
    );
  });
  return (
    <section className="chat-log">
      {chatComponents}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })),
    updateLiked: PropTypes.func.isRequired,
};

export default ChatLog;