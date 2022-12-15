import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = (props) => {
  const chatLogComponents = props.entries.map((chat) => {
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

  return <ul>{chatLogComponents}</ul>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateLiked: PropTypes.func.isRequired,
};

export default ChatLog;
