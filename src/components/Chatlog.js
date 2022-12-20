import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries, updateLiked }) => {
  const chatLogComponents = entries.map((chatEntry) => {
    return (
      <ChatEntry
        key={chatEntry.id}
        id={chatEntry.id}
        sender={chatEntry.sender}
        body={chatEntry.body}
        timeStamp={chatEntry.timeStamp}
        liked={chatEntry.liked}
        updateLiked={updateLiked}
      ></ChatEntry>
    );
  });

  return <ul>{chatLogComponents}</ul>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool,
    })
  ),
  updateLiked: PropTypes.func,
};

export default ChatLog;
