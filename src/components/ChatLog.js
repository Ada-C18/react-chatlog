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
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateLiked: PropTypes.func,
  //   PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   senderData: PropTypes.string.isRequired,
  //   bodyData: PropTypes.string.isRequired,
  //   timeStampData: PropTypes.string.isRequired,
  //   likedData: PropTypes.bool
  // }))
};

export default ChatLog;