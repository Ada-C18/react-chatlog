import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
// import './ChatLog.css';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((chat, i) => {
    return (
      <ChatEntry
        key={i}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
        onUpdateLiked={props.onUpdateLiked}
      />
    );
  });

  return <div>{chatComponents}</div>;
};

ChatLog.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onUpdateLiked: PropTypes.func.isRequired,
};

export default ChatLog;
