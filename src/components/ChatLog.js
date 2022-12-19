import ChatEntry from './ChatEntry';

import PropTypes from 'prop-types';

const ChatLog = ({ entries, onLike }) => {
  return (
    <ul>
      {entries.map((message) => (
        <ChatEntry
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          id={message.id}
          key={message.id}
          onLike={onLike}
        ></ChatEntry>
      ))}
    </ul>
  );
};
ChatLog.propTypes = {
  entires: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onLike: PropTypes.func.isRequired,
};
export default ChatLog;
