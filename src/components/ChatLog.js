import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((message) => {
    return (
      <div key={message.id}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          heartClickCallback={props.heartClickCallback}
        />
      </div>
    );
  });

  return <div>{chatComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
