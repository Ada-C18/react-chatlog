import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = (props) => {
  const chatData = props.entries;
  const chatLogComponents = chatData.map((chat) => {
    return (
      <li>
        <ChatEntry
          sender={chat.sender}
          body={chat.body}
          timeStamp={chat.timeStamp}
        ></ChatEntry>
      </li>
    );
  });

  return <ul>{chatLogComponents}</ul>;
};

ChatLog.propTypes = {
  chatData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatLog;
