import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries, likeCountCallBack }) => {
  const chatLogComponents = entries.map((chatEntry) => {
    return (
      <div key={chatEntry.id}>
        <ChatEntry
          id={chatEntry.id}
          sender={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}
          liked={chatEntry.liked}
          likeCountCallBack={likeCountCallBack}
        ></ChatEntry>
      </div>
    );
  });
  return <section className="chat-log">{chatLogComponents}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  likeCountCallBack: PropTypes.func.isRequired,
};

export default ChatLog;
