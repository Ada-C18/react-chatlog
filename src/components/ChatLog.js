import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

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
        /*onUpdateliked = {props.onUpdateLiked}*/
    
      />
    );
  });

  return <div>{chatComponents}</div>;
};

ChatEntry.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool,
    })),
 /* onUpdateLiked: PropTypes.func,*/
};

export default ChatLog;
